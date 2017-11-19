#!/bin/bash

if service bluetooth status | grep 'active (running)' > /dev/null; then
	service bluetooth stop
else
	service bluetooth start
fi
