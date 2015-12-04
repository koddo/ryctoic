-- \set ECHO all

-- TODO: restrict replication role to min possible privileges, it's going to have an automated passwordless login
-- TODO: move all todos to a todos file or to a tracker, we don't want to have todos in migration files, we can't edit them


-- we follow a general recommendation to create roles and then grant them to users
create role admin_role;           -- owns the database
create role client_role;          -- business logic here, can read and write, views with security_barrier, functions with security definer
create role sp_only_role;              -- most restricted, stored functions only

create user administrator with
       login
       encrypted password 'secret'
       inherit; -- see readme
grant admin_role to administrator;



create user client with
       login
       encrypted password 'secret'
       inherit; -- see readme
grant client_role to client;

create user sp_only with
       login
       encrypted password 'secret'
       inherit; -- see readme
grant sp_only_role to sp_only;



create role ssl_cert_group;
grant ssl_cert_group to administrator,
                        client,
                        sp_only;


------------------------------------------------------------

create database ryctoicdb with
       owner = admin_role
       encoding   = 'UTF8'
       lc_collate = 'C'
       lc_ctype   = 'C'
       connection limit = 10
       template = template0;  -- can't specify encoding and locale with the template1
\connect ryctoicdb;

------------------------------------------------------------

drop schema public;     -- let's start from scratch

------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------

set session authorization administrator;
set role admin_role;
-- reset role;

------------------------------------------------------------


------------------------------------------------------------


------------------------------------------------------------
create schema myschema authorization admin_role;
alter database ryctoicdb set search_path to myschema;
set search_path to myschema;
create schema pgtap authorization admin_role;
create extension pgtap with schema pgtap;
------------------------------------------------------------
grant connect on database ryctoicdb to administrator;
grant connect on database ryctoicdb to client_role;
create table test_table ( did integer, primary key (did) );
grant select, insert, update, delete on table test_table to client_role;
grant usage on schema myschema to client_role;
------------------------------------------------------------
-- TODO: did we really revoked everything from the public role?
-- TODO: any better way to revoke all from the public role?
revoke all on database ryctoicdb from public cascade;
revoke all                   on schema myschema from public cascade;
revoke all on all tables     in schema myschema from public cascade;
revoke all on all sequences  in schema myschema from public cascade;
revoke all on all functions  in schema myschema from public cascade;
alter default privileges     in schema myschema revoke all on tables      from public cascade;
alter default privileges     in schema myschema revoke all on sequences   from public cascade;
alter default privileges     in schema myschema revoke all on functions   from public cascade;
alter default privileges     in schema myschema revoke all on types       from public cascade;
revoke all                   on schema pgtap from public cascade;
revoke all on all tables     in schema pgtap from public cascade;
revoke all on all sequences  in schema pgtap from public cascade;
revoke all on all functions  in schema pgtap from public cascade;
alter default privileges     in schema pgtap revoke all on tables      from public cascade;
alter default privileges     in schema pgtap revoke all on sequences   from public cascade;
alter default privileges     in schema pgtap revoke all on functions   from public cascade;
alter default privileges     in schema pgtap revoke all on types       from public cascade;
-- TODO: information_schema, pg_catalog, etc, have some privileges and permissions via the public role --- should we revoke them?
------------------------------------------------------------




-- TODO: remove the default postgres database or don't create it









------------------------------------------------------------
-- reset role;
-- reset session authorization;
------------------------------------------------------------



