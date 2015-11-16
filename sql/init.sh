#!/usr/bin/env bash

HBA=/var/lib/postgresql/data/pg_hba.conf

# yes, clear the file, we don't need the defaults
echo -n > $HBA

cat >> $HBA <<EOF
local   all   all               password
host    all   all   0.0.0.0/0   password
host    all   all   ::0/0       password
EOF

# TODO: postgres limit connections only from allowed IPs
# TODO: iptables limit connections only from allowed IPs
# TODO: read only file system, so the root won't be allowed to change anything to let herself in


# auth-method=md5 is bad, mkay?
# please correct me if i'm wrong here: http://security.stackexchange.com/questions/41064/is-postgres-password-based-authentication-secure/104409#104409
# TODO: use ssl, auth-method=password, create user with _encrypted_ password
# TODO: later: what is safer instead of that scheme? kerberos, ldap, pam, gss, etc?



## a draft:
# local all all   password
# local superuser all reject --- too much?
# hostssl someuser ryctoicdb somenet/30   password
# --- reject everything else
# hostssl   all all 0.0.0.0/0 reject
# hostnossl all all 0.0.0.0/0 reject
# etc


# replication user should be locked down especially tightly, because such logins are often automated and thus passwordless
# lock down the superuser, we don't normally need that set of permissions



