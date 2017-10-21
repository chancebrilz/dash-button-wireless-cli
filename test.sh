#!/bin/bash

# this sh script is MacOS specific and requires blueutil,
# a 3rd party app: http://www.frederikseiffert.de/blueutil/

if blueutil status | grep 'Status: on' > /dev/null; then
	blueutil off
else
	blueutil on
fi
