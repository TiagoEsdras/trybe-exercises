#!/bin/bash
#8 -
TOTAL=$(ls *.png)
DATA=$(date -d 'today' '+%Y-%m-%d')
for ITEM in $TOTAL
do
    $(mv $ITEM "$DATA-$ITEM")
done