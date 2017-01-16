
!!! never write to-do inside schema migration files, they are meant to be final and unchangeable !!!

!!! write them here !!!

TODO: create a git hook which notifies if migrations have changed 


# pg-schema-version.py


see its dockerfile


# locale

locale is set to C

## we can use collations later, when needed

debian docker image doesn't have locales other that utf-8, here is how to add one

this worked:

``` Shell
# localedef --no-archive -f UTF-8 -i fr_FR fr_FR.UTF-8
```

```
psql> CREATE COLLATION "fr_FR" (LOCALE = 'fr_FR.utf8');
psql> select * from pg_collation;
psql> select initcap('welcome to CHAMPS-ÉLYSÉES' collate "fr_FR");
=> Welcome To Champs-Élysées'
by psql I mean pgagmin3, because my terminal couldn't paste those french chars
probably it's a good idea to have a copy of this collation named "fr_FR.utf8", I don't know yet, but why anyway?

this is meant to be an equivalent to localedef, but didn't work for me:
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen --no-archive
```




# create role noinherit vs inherit

inherit is the default for backwards compatibility

behavior specified by the SQL standard (most closely approximated): noinherit for users, inherit for groups

http://www.postgresql.org/docs/current/static/sql-createrole.html

we created our clients with inherit for simplicity

to avoid setting role explicitly on login



# misc

we had this in our functions definitions, but then changed our naming style: `#variable_conflict use_variable`

maybe \set ECHO all

TODO: restrict replication role to min possible privileges, it's going to have an automated passwordless login
TODO: did we really revoke everything from the public role? any better way to revoke all from the public role? can also revoke on domain, foregn data, foreign server, language, large object, type? information_schema, pg_catalog, etc, have some privileges and permissions via the public role --- should we revoke them?
TODO: remove the default postgres database or even don't create it
TODO: length constraint for removed_at[] array in the remove_card() function, it should not grow large, we don't mind losing this data, to avoid filling the db with trash --- any better idea?
TODO: save device fingerprint when adding or removing a card, to let a user get more detailed history --- and let's hash it for privacy
TODO: check if a user has a card when she tries to create one
TODO: check for uuid collisions when creating and adding cards 

```
select create_and_add_card(4, null, 'pi',  '3.14', now()::date, pack_progress_data(2.5, 0, 0, 0, false, false, 0), get_or_create_deck_id('numbers'), get_or_create_context_id('https://en.wikipedia.org/wiki/Pi'));
select create_and_add_card(4, null, 'exp', '2.7',  now()::date, pack_progress_data(2.5, 0, 0, 0, false, false, 0), get_or_create_deck_id('numbers'), get_or_create_context_id('https://en.wikipedia.org/wiki/E_(mathematical_constant)'));
select edit_card_content(4, ''::uuid, 'pi',  '3.1415');
select edit_card_content(4, ''::uuid, 'exp',  '2.71828');
select edit_card_progress(4, ''::uuid, (now()+'1 day'::interval)::date, pack_progress_data(2.4,0,3,0,false,false,0));

select add_card_to_deck(4, '6f2b7ac4-5277-4b34-ad33-41d774bf2e6a'::uuid, get_or_create_deck_id('python --- comprehensions'));
select add_card_to_deck(4, '8fc6912a-19a1-479b-854f-77a4752e4025'::uuid, get_or_create_deck_id('python --- comprehensions'));
select remove_card_from_deck(4, '6f2b7ac4-5277-4b34-ad33-41d774bf2e6a'::uuid, get_or_create_deck_id('python --- conditionals and loops'));
select remove_card_from_deck(4, '8fc6912a-19a1-479b-854f-77a4752e4025'::uuid, get_or_create_deck_id('python --- conditionals and loops'));
select add_context_to_card(4, '6f2b7ac4-5277-4b34-ad33-41d774bf2e6a'::uuid, get_or_create_context_id('http://my-jekyll.dev.dnsdock:4000/ryctoic/python#comprehensions'));
select add_context_to_card(4, '8fc6912a-19a1-479b-854f-77a4752e4025'::uuid, get_or_create_context_id('http://my-jekyll.dev.dnsdock:4000/ryctoic/python#comprehensions'));
select remove_context_from_card(4, '6f2b7ac4-5277-4b34-ad33-41d774bf2e6a'::uuid, get_or_create_context_id('http://my-jekyll.dev.dnsdock:4000/ryctoic/python#conditionals-and-loops'));
select remove_context_from_card(4, '8fc6912a-19a1-479b-854f-77a4752e4025'::uuid, get_or_create_context_id('http://my-jekyll.dev.dnsdock:4000/ryctoic/python#conditionals-and-loops'));

select * from users; select * from cards; select * from cards_orset; select * from decks; select * from card_decks_orset; select * from contexts; select * from card_contexts_orset;
select * from users where id = 1; select * from cards where created_by = 1; select * from cards_orset where user_id = 1; select * from card_decks_orset where user_id = 1; select * from card_contexts_orset where user_id = 1;
select * from get_card_contexts(4, ''::uuid) as c join card_contexts_orset as s on c = s.context_id join contexts as ctx on s.context_id = ctx.id where s.removed_at is null;

select * from show_all(4);
select * from show_all(4) where now()::date >= due order by random() limit 1;
select id, front       from cards where id = ''::uuid;
select id, front, back from cards where id = ''::uuid;
select review_card(4, ''::uuid, 4);
select edit_card_content(4, ''::uuid, '',  '');

TODO: context lenght?

TODO: front and back lenght?

TODO: !!! same now() for added_at and removed_at


select create_and_add_card(4, null, 
$$$$, 
$$$$, 
now()::date, 
pack_progress_data(2.5, 0, 0, 0, false, false, 0), 
get_or_create_deck_id(''), 
get_or_create_context_id(''));

















```


-- get_all_cards
-- add
-- remove
-- contains
-- merge
-- compare



TODO: post my question to mailing list: http://stackoverflow.com/questions/34107804/revoke-everything-from-the-public-role-in-postgres 

TODO: add_card() has a tiny race condition between has_card() and insert, get rid of it --- now we can insert duplicates when trying to concurrently add cards --- maybe use upsert or classic loop http://www.postgresql.org/docs/current/static/plpgsql-control-structures.html#PLPGSQL-UPSERT-EXAMPLE 

we have prev_interval column in cards_orset when it can be calculated, for performance reasons, to reduce the load, to avoid 1-2 more selects

TODO: partition the cards_orset table: live cards on one server, dead ones on another --- working on cards will be faster at the cost of slower history and merging
TODO: partition the all_cards table: cards no one uses go to history server

at first the alive column was named tombstone and had reverse logic, but I decided it would be easier to reason about true/false with this name
-- alive               boolean not null default true,

TODO: what should add_card() return?

we have a deck with id=uuid_nil() and name '' for cards, which do not belong to any deck  
we can't have null for it, because a composite key enforeses not null for every it's column

sadly, can't write insert ... on conflict do nothing ... returning ... --- this returns null on conflict

# on delete set null/cascade for cards

we leave cards when removing a user or prev revision
we delete cards from users' sets when cards are deleted globally
see on delete set null/cascade


-- http://stackoverflow.com/questions/10356484/how-to-add-on-delete-cascade-constraints
-- alter table all_cards
-- drop constraint all_cards__prev_revision_id__fkey,
--     add constraint all_cards__prev_revision_id__fkey foreign key (prev_revision_id) references all_cards(id) on delete cascade;

-- -- old code:
-- alter table all_cards
--     add constraint all_cards__prev_revision_id__fkey   foreign key (prev_revision_id)   references all_cards(id)   on delete set null,
--     add constraint all_cards__created_by__fkey         foreign key (created_by)         references users(id)       on delete set null;
-- alter table cards_orset
--     add constraint cards_orset__user_id__fkey   foreign key (user_id)   references users(id)       on delete cascade,
--     add constraint cards_orset__card_id__fkey   foreign key (card_id)   references all_cards(id)   on delete cascade;

we have `index cards_content_by_user_unique_idx` temporarily, probably
it's to avoid creating duplicate cards manually using cli in the psql

# tests

remember that sequences are not rolled back to the value used at the beginning of a rolled-back transaction
because of that we have test users with test_identity_provider, to leave sequences untouched in tests
this is probably stupid when identificators are bigint, but anyway

TODO: a test schemas_are( array['app', 'misc'] ) doesn't fail, why? there is also the pgtap schema
TODO: revoke everything from everybody on the default postgres database and test it

maybe later check if users have no passwords, but unsure how, pg_user always shows stars, pg_shadow is inaccessible for admin_role
maybe later check if admin_role has grant option for functions

how to delete all stored functions — when you are in dev mode

TODO: how to test row 'on delete set null'?
TODO: we have a check for the app.cards_orset.removed_at column, but we need to test it properly

for unknown reason we can't just pgtap.runtests() without regex pattern, have to pass '^test_' to make them run


TODO: I cut the following from V000a__init.sql. Make sure we indeed don't need this and writes some tests
-- alter default privileges       in schema app      revoke all on tables      from public cascade;
-- alter default privileges       in schema app      revoke all on sequences   from public cascade;
-- alter default privileges       in schema app      revoke all on functions   from public cascade;
-- alter default privileges       in schema app      revoke all on types       from public cascade;
-- alter default privileges       in schema misc     revoke all on tables      from public cascade;
-- alter default privileges       in schema misc     revoke all on sequences   from public cascade;
-- alter default privileges       in schema misc     revoke all on functions   from public cascade;
-- alter default privileges       in schema misc     revoke all on types       from public cascade;
-- alter default privileges       in schema pgtap    revoke all on tables      from public cascade;
-- alter default privileges       in schema pgtap    revoke all on sequences   from public cascade;
-- alter default privileges       in schema pgtap    revoke all on functions   from public cascade;
-- alter default privileges       in schema pgtap    revoke all on types       from public cascade;


right now pg-schema-version.py doesn't support running tests, this is work in progress, so run tests like this:

``` Shell
./pg-schema-version.py psql --pset pager=off -f V000t__tests.pgtap 
```


# drop functions

this generates a script to drop them all

```
SELECT 'DROP FUNCTION ' || ns.nspname || '.' || proname || '(' || oidvectortypes(proargtypes) || ');'
FROM pg_proc INNER JOIN pg_namespace ns ON (pg_proc.pronamespace = ns.oid)
WHERE ns.nspname = 'app'  order by proname;
```

if output is truncated, set output format to \a

http://stackoverflow.com/questions/10591113/drop-all-functions-from-postgres-database
http://www.postgresonline.com/journal/archives/74-How-to-delete-many-functions.html

maybe try this stored function to drop all functions from a schema: http://dba.stackexchange.com/questions/122742/how-to-drop-all-of-my-functions-in-postgres-in-single-step




# cards_orset




# intervals

prev_interval uses 4 bytes and it counts minutes, so max interval is 2147483647 / (60*24*365) which is approx 4000 years





# cards and decks positions

```
-- create table card_position (
--         user_id                integer  not null references users(id)       on delete cascade,
--         card_id                uuid     not null references cards(id)       on delete cascade,
--         inside_the_deck        ,
--         position_lseq          ,
--         added_at               timestamptz not null default now(),
--         removed_at             timestamptz default null,
--         primary key (user_id, card_id, context_id, added_at)
--         );

-- create table deck_position (
--         user_id                integer  not null references users(id)       on delete cascade,
--         deck_id                uuid     not null references decks(id)       on delete cascade,
--         inside_the_deck        ,
--         position_lseq          ,
--         added_at               timestamptz not null default now(),
--         removed_at             timestamptz default null,
--         primary key (user_id, card_id, context_id, added_at)
--         );

```



