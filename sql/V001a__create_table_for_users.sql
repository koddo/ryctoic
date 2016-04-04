begin;
set local role admin_role;


create table users (
        id                  bigserial primary key,
        identity_provider   text not null,   -- anonymous, google, facebook, twitter, etc
        provided_id         text not null,
        created_at          timestamptz not null default now(),
        etc                 jsonb not null   default '{}'::jsonb   check( jsonb_typeof(etc) = 'object' ),
        unique (identity_provider, provided_id)
        );


commit;

