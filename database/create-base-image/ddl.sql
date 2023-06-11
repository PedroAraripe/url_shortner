CREATE DATABASE main_db;
\c main_db;

CREATE TABLE user_register (
	user_id serial PRIMARY KEY,
	login VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	UNIQUE(login)
);

CREATE TABLE url_shortned_param (
	shortned_id serial PRIMARY KEY,
	shortned_param VARCHAR ( 50 ) DEFAULT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	UNIQUE(shortned_param)
);

CREATE TABLE url_register (
	register_id serial PRIMARY KEY,
	shortned_id INT DEFAULT NULL,
	url_basic VARCHAR ( 80 ) NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_url_shortned_param
		FOREIGN KEY(shortned_id) 
		REFERENCES url_shortned_param(shortned_id),
	UNIQUE(url_basic)
);

CREATE TABLE user_has_url (
	id serial PRIMARY KEY,
	register_id INT NOT NULL,
	user_id INT NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_url_register
		FOREIGN KEY(register_id) 
		REFERENCES url_register(register_id),
	CONSTRAINT fk_user
		FOREIGN KEY(user_id) 
		REFERENCES user_register(user_id),
	UNIQUE(register_id, user_id)
);

CREATE TABLE url_access_log (
	log_id serial PRIMARY KEY,
	register_id INT NOT NULL,
	user_id INT DEFAULT NULL,
	accessed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_url
		FOREIGN KEY(register_id)
		REFERENCES url_register(register_id),
	CONSTRAINT fk_user
		FOREIGN KEY(user_id)
		REFERENCES user_register(user_id)
);

CREATE VIEW v_base_url_shortned AS
SELECT
	ur.register_id,
	ur.shortned_id,
	ur.url_basic,
	up.shortned_param,
	ur.created_on
FROM url_register ur
INNER JOIN url_shortned_param up
ON up.shortned_id = ur.shortned_id;

CREATE VIEW v_user_url AS
SELECT
	ur.user_id,
	vbus.register_id,
	vbus.shortned_id,
	ur.login,
	vbus.url_basic,
	vbus.shortned_param
FROM user_has_url uhu
INNER JOIN user_register ur
ON ur.user_id = uhu.user_id
INNER JOIN V_BASE_URL_SHORTNED vbus
ON vbus.register_id = uhu.register_id;

CREATE VIEW v_grouped_access_count AS
SELECT
	register_id,
	count(register_id) accessed_times
FROM url_access_log
GROUP BY register_id;

CREATE VIEW v_most_accessed_urls AS
SELECT
	vbus.register_id,
	vbus.shortned_id,
	vbus.url_basic,
	vbus.shortned_param,
	coalesce(vgac.accessed_times, 0) accessed_times
FROM v_base_url_shortned vbus
LEFT JOIN v_grouped_access_count vgac
on vbus.register_id = vgac.register_id
ORDER BY
	accessed_times DESC,
	url_basic ASC
LIMIT 100;