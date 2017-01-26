#!/usr/bin/env bash

## e.g., ./backend.m4 -> Dockerfile_backend

find . -type f -name "*.m4" -print0 | while IFS= read -r -d $'\0' FILE_M4; do
    STRIPPED=$(basename "$FILE_M4" '.m4')
    DOCKERFILE="Dockerfile_$STRIPPED"
    echo "$FILE_M4 -> $DOCKERFILE"
    m4 "$FILE_M4" > "$DOCKERFILE"             # maybe --include=includes_dir/
done


