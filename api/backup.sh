#!/bin/bash
# Variáveis de configuração
USUARIO="postgres"
SENHA="123"
BANCO="centroinfo"
HOST="localhost"
PORT="5432"
BANCO_CONEXAO="postgres"  # Outro banco qualquer, não pode ser o que vai ser excluído
DIR="./bkp_base" # local de destino do backup

# Executa o backup
data=$(date +%Y%m%d)
hora=$(date +%H%M)
database="centroinfo"
file="$database-$data-$hora.dump"
pg_dump -U $BANCO_CONEXAO -h $HOST -p $PORT -F c -b -v -f $DIR/$file $BANCO