FROM postgres:15.3-alpine3.18
# COPY world.sql /docker-entrypoint-initdb.d/
COPY ./create-base-image/ddl.sql /docker-entrypoint-initdb.d/
# COPY ./create-base-image/seeds.sql /docker-entrypoint-initdb.d/

EXPOSE 5432