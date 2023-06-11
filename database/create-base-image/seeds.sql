\c main_db;

INSERT INTO user_register(login, password)
VALUES
  ('user-01', 'secret'),
  ('user-02', 'secret'),
  ('user-03', 'secret'),
  ('user-04', 'secret'),
  ('user-05', 'secret'),
  ('user-06', 'secret'),
  ('user-07', 'secret'),
  ('user-08', 'secret'),
  ('user-09', 'secret'),
  ('user-10', 'secret'),
  ('user-11', 'secret'),
  ('user-12', 'secret'),
  ('user-13', 'secret'),
  ('user-14', 'secret'),
  ('user-15', 'secret');

INSERT INTO url_register(url_basic)
VALUES
  ('https://adobe.com'),
  ('https://alibaba.com'),
  ('https://amazon.com'),
  ('https://apple.com'),
  ('https://bbc.co.uk'),
  ('https://bloomberg.com'),
  ('https://cnn.com'),
  ('https://dropbox.com'),
  ('https://ebay.com'),
  ('https://espn.com'),
  ('https://facebook.com'),
  ('https://forbes.com'),
  ('https://github.com'),
  ('https://google.com'),
  ('https://imdb.com'),
  ('https://instagram.com'),
  ('https://linkedin.com'),
  ('https://medium.com'),
  ('https://microsoft.com'),
  ('https://netflix.com'),
  ('https://nytimes.com'),
  ('https://paypal.com'),
  ('https://pinterest.com'),
  ('https://quora.com'),
  ('https://reddit.com'),
  ('https://salesforce.com'),
  ('https://slack.com'),
  ('https://soundcloud.com'),
  ('https://spotify.com'),
  ('https://stackoverflow.com'),
  ('https://tumblr.com'),
  ('https://twitch.tv'),
  ('https://twitter.com'),
  ('https://whatsapp.com'),
  ('https://wikipedia.org'),
  ('https://wordpress.com'),
  ('https://xkcd.com'),
  ('https://yahoo.com'),
  ('https://yelp.com'),
  ('https://youtube.com'),
  ('https://zillow.com'),
  ('https://zoom.us');

INSERT INTO url_shortned_param(shortned_param)
VALUES
  ('a'),
  ('b'),
  ('c'),
  ('d'),
  ('e'),
  ('f'),
  ('g'),
  ('h'),
  ('i'),
  ('j'),
  ('k'),
  ('l'),
  ('m'),
  ('n'),
  ('o'),
  ('p'),
  ('q'),
  ('r'),
  ('s'),
  ('t'),
  ('u'),
  ('v'),
  ('x'),
  ('y'),
  ('z'),
  ('1'),
  ('3'),
  ('5'),
  ('6'),
  ('7'),
  ('8'),
  ('9');

UPDATE  url_register ur
SET shortned_id = 
(
  SELECT shortned_id 
  FROM url_shortned_param up 
  WHERE up.shortned_id = ur.register_id
);

INSERT INTO user_has_url(register_id ,user_id)
VALUES
  (1, 2),
  (1, 4),
  (1, 3),
  (5, 2),
  (3, 4);

INSERT INTO url_access_log(user_id, register_id)
VALUES
  (null, 1),
  (null, 4),
  (null, 3),
  (null, 1),
  (2, 1),
  (4, 1),
  (3, 1),
  (4, 3),
  (2, 5),
  (4, 1),
  (4, 1),
  (3, 1),
  (2, 5),
  (4, 3),
  (4, 3),
  (3, 1),
  (2, 5),
  (2, 5),
  (4, 3),
  (2, 1),
  (4, 1),
  (3, 1),
  (2, 5),
  (4, 3);