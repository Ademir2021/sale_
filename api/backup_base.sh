#!/bin/bash

dir="api/bkp_base"

echo "Verificando backup atual."
busca=$(find $dir/. -type f | wc -l)

if [ $busca -eq 4 ]; then
    echo 'Já existe o total de 4 arquivos de backup.'
    echo 'Remover o arquivo de backup mais de 3 dias'
    find $dir/ -mindepth 1 -type f -mtime +3 -exec rm -rf {} +
        else
                echo 'Localizado menos de 4 arquivos de backup'
                echo "Iniciando Backup da Base de dados."
                data=$(date +%Y%m%d)
                hora=$(date +%H%M)
                database="centroinfo"
                file="$database-$data-$hora.bkp"
                sudo docker exec -t postgres-container pg_dump -U postgres $database > $dir/$file
                echo "Backup da base $database executado com sucesso."
                echo $(date) >> $dir/bkp_base.log
fi
