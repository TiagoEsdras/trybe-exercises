#!/bin/bash
#5 -
read -p "Escreva o caminho:" CAMINHO
if [ -f $CAMINHO ]
    then
        echo "$CAMINHO é um arquivo comum"
    elif [ -d $CAMINHO ]
    then
        echo "$CAMINHO é um diretório"
    else
        echo "$CAMINHO é um tipo especial de arquivo"
fi
ls -l $CAMINHO