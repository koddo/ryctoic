-- create schema ryctoic_schema;
-- set search_path to ryctoic_schema;
-- in flyway.conf: flyway.url=jdbc:postgresql://postgres.dev.dnsdock:5432/postgres?currentSchema=ryctoic_schema
-- there is also schemas param, but I haven't tried it

-- Database: postgres

-- DROP DATABASE postgres;




CREATE DATABASE postgres
WITH OWNER = postgres
ENCODING = 'UTF8'
TABLESPACE = pg_default
LC_COLLATE = 'en_US.utf8'
LC_CTYPE = 'en_US.utf8'
CONNECTION LIMIT = -1;

COMMENT ON DATABASE postgres
IS 'default administrative connection database';






-- Schema: public

-- DROP SCHEMA public;

CREATE SCHEMA public
AUTHORIZATION postgres;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
IS 'standard public schema';





-- Table: person

-- DROP TABLE person;

CREATE TABLE person
(
id integer NOT NULL,
name character varying(100) NOT NULL
)
WITH (
OIDS=FALSE
);
ALTER TABLE person
OWNER TO root;



-- Role: root

-- DROP ROLE root;

CREATE ROLE root LOGIN
ENCRYPTED PASSWORD 'md5c585836b5bc67c90d5a50b811964ee7f'
SUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;

-- Role: postgres

-- DROP ROLE postgres;

CREATE ROLE postgres LOGIN
SUPERUSER INHERIT CREATEDB CREATEROLE REPLICATION;
-- Role: myuser

-- DROP ROLE myuser;

CREATE ROLE myuser LOGIN
ENCRYPTED PASSWORD 'md59d02d808a4b9277d3d1d3655baf9a6dc'
NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION;
