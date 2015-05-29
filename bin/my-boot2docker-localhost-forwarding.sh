#!/usr/bin/env bash

for i in 8080 4369 {9100..9102}; do
    ## on VM turned off
    # VBoxManage modifyvm "boot2docker-vm" --natpf1 "tcp-port$i,tcp,,$i,,$i";
    # VBoxManage modifyvm "boot2docker-vm" --natpf1 "udp-port$i,udp,,$i,,$i";

    ## on a running VM
    # VBoxManage controlvm "boot2docker-vm" natpf1 "tcp-port$i,tcp,,$i,,$i";
    # VBoxManage controlvm "boot2docker-vm" natpf1 "udp-port$i,udp,,$i,,$i";
    # VBoxManage controlvm "boot2docker-vm" natpf1 delete "tcp-port$i";
    # VBoxManage controlvm "boot2docker-vm" natpf1 delete "udp-port$i";
done

