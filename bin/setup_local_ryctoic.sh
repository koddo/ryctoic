#!/usr/bin/env bash

WIFI_IP=$(ipconfig getifaddr en1)
ETHERNET_IP=$(ipconfig getifaddr en0)
DOCKER_BRIDGE_IP=$(ssh alex@debian.local "ip -4 addr show docker0 | grep -Po 'inet \K[\d.]+'")   # dnsdock's port 53 is mapped on it
# DOCKER_VM_IP=$(ping -c 1 debian.local | awk -F'[()]' '/PING/{print $2}')
TAB=$'\t'   # sed doesn't understan

echo "configure your smartphone or tablet to user this dns server: $WIFI_IP"
echo "and you will be able to use the local.ryctoic.com address"
echo "btw, now you can ping ryctoic_backend.dev.dnsdock or ryctoic_postgres.dev.dnsdock or anything"
echo "---"

# please don't laugh, I'm on mac using unprivileged account
su admin -c "sudo sh -c \"sed -i '' 's/^.*local.ryctoic.com/$WIFI_IP${TAB}local.ryctoic.com/g' /etc/hosts ; \
port unload dnsmasq ; \
port load dnsmasq ; \
route -n add 172.17.0.0/16 debian.local ; \
networksetup -setdnsservers Wi-Fi $DOCKER_BRIDGE_IP 8.8.8.8 8.8.4.4
networksetup -setdnsservers Ethernet $DOCKER_BRIDGE_IP 8.8.8.8 8.8.4.4
\""



# to reset dns list to one observed via dhcp:
# $ su admin -c "sudo sh -c \"networksetup -setdnsservers Wi-Fi empty ; networksetup -setdnsservers Ethernet empty\""




