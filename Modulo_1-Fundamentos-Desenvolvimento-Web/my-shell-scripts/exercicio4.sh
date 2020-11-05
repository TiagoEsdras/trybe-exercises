#!/bin/bash
# 4 -
CAMINHO="/home/tiago-esdras/unix_tests/teste.txt"
echo $CAMINHO
if [ -e $CAMINHO ]
    then
        echo "O caminho $CAMINHO está habilitado!"
    else
        echo "O caminho $CAMINHO não está habilitado!"
fi
if [ -w $CAMINHO ]
    then
        echo "Você tem permissão para editar $CAMINHO"
    else
        echo "Você NÃO foi autorizado a editar $CAMINHO"
fi