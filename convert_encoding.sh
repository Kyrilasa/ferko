#!/bin/bash

# function to convert file encodings
function convert_encoding {
    file="$1"
    echo "Converting $file..."
    iconv -f WINDOWS-1250 -t UTF-8 "$file" > "${file}.utf8"
    mv "${file}.utf8" "$file"
}

# function to process a directory
function process_dir {
    for file in "$1"/*; do
        if [ -d "$file" ]; then
            process_dir "$file"
        elif [ -f "$file" ] && [[ "$file" == *.html ]]; then
            convert_encoding "$file"
        fi
    done
}

# start processing from the current directory
process_dir .
