
-- TODO: restrict replication role to min possible privileges, it's going to have an automated passwordless login

-- inherit for roles
-- noinherit for users
-- http://www.postgresql.org/docs/9.4/static/role-membership.html

\set ECHO all

-- postgres user is the superuser
create role admins_group;    -- almost a superuser
create role clients_group;           -- business logic here, can read and write, views with security_barrier, security definer
create role api_group;              -- stored functions only



create database ryctoicdb with
       owner = admins_group
       encoding   = 'UTF8'
       lc_collate = 'C'
       lc_ctype   = 'C'
       connection limit = 10
       template template0;   -- http://stackoverflow.com/questions/18870775/how-to-change-the-template-database-collection-coding-on-postgresql

\connect ryctoicdb;

drop schema public;


create user asdf with
       login
       encrypted password 'fdsa'
       noinherit
       in role admins_group;




-- set role admins_role;
-- set session authorization admins_role;














create schema pgtap;
create extension pgtap with schema pgtap;
BEGIN;
        SELECT set_config(
               'search_path',
               current_setting('search_path') || ',pgtap',
               true   -- local
               );
        SELECT * FROM no_plan();
        SELECT pass( 'My test passed, w00t!' );
        SELECT * FROM finish();
ROLLBACK;




-- TODO: remove the default postgres database or don't create it




