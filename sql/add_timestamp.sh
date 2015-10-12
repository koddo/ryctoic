#!/usr/bin/env bash

# macosx date cmd doens't have %N to print nanoseconds, so we concatenate a random int

R=$(printf "%05d" $RANDOM)
PREFIX=$(date -u +%Y%m%d.%H%M%S.$R)

mv "$1"   V"$PREFIX"__"$1"


