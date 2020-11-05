#!/bin/bash
# 7 -
CAMINHO=$*
if [ -d $CAMINHO ]
    then
        echo "O argumento $CAMINHO é um diretório!"
        CONT=$(ls -l $CAMINHO | wc -l)
        echo "O $CAMINHO tem $CONT arquivos."
    else
        echo "O argumento $CAMINHO não é um diretório!"
fi