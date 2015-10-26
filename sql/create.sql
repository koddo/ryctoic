
-- postgres user is the superuser
create user ryctoic_admin;
create user ryctoic_app;



create database ryctoicdb
    with
    owner = ryctoic_admin
    encoding   = 'UTF8'
    lc_collate = 'C'
    lc_ctype   = 'C'
    connection limit = -1;
\connect ryctoicdb;


-- locale is set to C
-- we can use collation later

-- this worked:
-- # localedef --no-archive -f UTF-8 -i fr_FR fr_FR.UTF-8
-- psql> CREATE COLLATION "fr_FR" (LOCALE = 'fr_FR.utf8');
-- psql> select * from pg_collation;
-- psql> select initcap('welcome to CHAMPS-ÉLYSÉES' collate "fr_FR");
-- => Welcome To Champs-Élysées'
-- by psql I mean pgagmin3, because my terminal couldn't paste those french chars
-- probably it's a good idea to copy this collate to the "fr_FR.utf8", I don't know yet, but why anyway?

-- this meant to be an equivalent, but this didn't work:
-- echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
-- echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen
-- locale-gen --no-archive






