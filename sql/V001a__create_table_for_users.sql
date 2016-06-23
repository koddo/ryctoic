begin;
set local role admin_role;


create table users (
        id                  serial primary key,
        created_at          timestamptz not null default now(),
        etc                 jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' )
        );


insert into app.users(identity_provider, provided_id) values('test_identity_provider', '1');
insert into app.users(identity_provider, provided_id) values('test_identity_provider', '2');


insert into app.users(identity_provider, provided_id) values('test_identity_provider', 'koddo');



commit;

