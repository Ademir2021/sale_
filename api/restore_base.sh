#!/bin/bash
# Variáveis de configuração
USUARIO="postgres"
SENHA="123"
BANCO="centroinfo"
HOST="localhost"
PORT="5432"
BANCO_CONEXAO="postgres"  # Outro banco qualquer, não pode ser o que vai ser excluído
BKP="./bkp_base/centroinfo-20250722-1553.dump" # local de origem do backup
# Exporta a senha para evitar prompt interativo
export PGPASSWORD=$SENHA
# Mata conexões ativas no banco alvo
psql -U $USUARIO -h $HOST -p $PORT -d $BANCO_CONEXAO -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '$BANCO';"
# Dropa o banco
psql -U $USUARIO -h $HOST -p $PORT -d $BANCO_CONEXAO -c "DROP DATABASE IF EXISTS $BANCO;"
# Cria um novo banco
psql -U $USUARIO -h $HOST -p $PORT -d $BANCO_CONEXAO -c "CREATE DATABASE $BANCO;"
# Limpa variável de senha por segurança
unset PGPASSWORD
# Restaura Banco
pg_restore -U $USUARIO -h $HOST -p $PORT -d $BANCO -v $BKP
