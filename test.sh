#!/bin/bash

if blueutil status | grep 'Status: on' > /dev/null; then
	blueutil off
else
	blueutil on
fi
