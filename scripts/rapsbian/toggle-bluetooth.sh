#!/bin/bash

# this sh script is MacOS specific and requires blueutil,
# a 3rd party app: http://www.frederikseiffert.de/blueutil/

if service bluetooth status | grep 'active (running)' > /dev/null; then
	service bluetooth stop
else
	service bluetooth start
fi
