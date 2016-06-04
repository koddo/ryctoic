
create database ryctoicdb with
    encoding   = 'UTF8'
    lc_collate = 'C'
    lc_ctype   = 'C'
    connection limit = 10
    template = template0;  -- can't specify encoding and locale with the template1
\connect ryctoicdb;



create role admin_role;           -- owns the database
create role client_role;          -- business logic here, can read and write, views with security_barrier, functions with security definer
create role sp_only_role;              -- most restricted, stored functions only
create role ssl_cert_group;

alter database ryctoicdb owner to admin_role;


create user administrator with
    login
    password null
    inherit;
grant admin_role to administrator;

create user client with
    login
    password null
    inherit;
grant client_role to client;

create user sp_only with
    login
    password null
    inherit;
grant sp_only_role to sp_only;

grant ssl_cert_group to
    administrator,
    client,
    sp_only;



drop schema public;


------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------

set session authorization administrator;
set role admin_role;

------------------------------------------------------------
------------------------------------------------------------
------------------------------------------------------------

create schema app    authorization admin_role;
create schema misc   authorization admin_role;
alter database ryctoicdb set search_path to app, misc;
set search_path to app, misc;
create schema pgtap  authorization admin_role;
create extension if not exists pgtap with schema pgtap;
------------------------------------------------------------
grant all on database ryctoicdb to admin_role;
grant connect on database ryctoicdb to client_role;
grant usage on schema app to client_role;
------------------------------------------------------------
revoke all on database ryctoicdb from public cascade;
revoke all                     on schema app      from public cascade;
revoke all on all tables       in schema app      from public cascade;
revoke all on all sequences    in schema app      from public cascade;
revoke all on all functions    in schema app      from public cascade;
revoke all                     on schema misc     from public cascade;
revoke all on all tables       in schema misc     from public cascade;
revoke all on all sequences    in schema misc     from public cascade;
revoke all on all functions    in schema misc     from public cascade;
revoke all                     on schema pgtap    from public cascade;
revoke all on all tables       in schema pgtap    from public cascade;
revoke all on all sequences    in schema pgtap    from public cascade;
revoke all on all functions    in schema pgtap    from public cascade;
alter default privileges    for role admin_role     revoke all on tables      from public cascade;
alter default privileges    for role admin_role     revoke all on sequences   from public cascade;
alter default privileges    for role admin_role     revoke all on functions   from public cascade;
alter default privileges    for role admin_role     revoke all on types       from public cascade;
------------------------------------------------------------




------------------------------------------------------------
reset role;
reset session authorization;

revoke all on tablespace pg_default from public;
revoke all on tablespace pg_global  from public;
create extension if not exists sslinfo       with schema misc;
create extension if not exists "uuid-ossp"   with schema misc;   -- select uuid_nil(), uuid_generate_v4()::text;
create extension if not exists pgcrypto      with schema misc;   -- select gen_random_uuid();

revoke all on all functions   in schema misc     from public cascade;   -- admin_role can't do this, only the superuser
grant  all on all functions   in schema misc     to admin_role    with grant option;
------------------------------------------------------------






