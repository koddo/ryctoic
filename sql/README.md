
flyway
========

http://flywaydb.org/getstarted/why.html

tricks
=========

http://www.jeremyjarrell.com/using-flyway-db-with-distributed-version-control/

to avoid filename collisions across different branches
a migration starts with a utc timestamp
V20151006.174040.24034__some_migration.sql

migration starts with a letter V and description goes after two underscores


idempotend migrations
======================

sounds like a good idea,
but to me
on migration fail
the fail fast is a better strategy

to me a cleaner way look like this:
find out what failed,
fix the script, restore a test db from backup, try the migration again

http://thedailywtf.com/articles/Database-Changes-Done-Right







