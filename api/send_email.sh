#!/bin/bash
# Substitua pelas suas informações
destinatario="centroserra@gmail.com"
assunto="Security backup"
caminho_do_arquivo="/bkp_base/centroinfo-20250523-1130.bkp"
mensagem="Backup do banco de dados centroinfo."

# Usando o comando mail para enviar o e-mail com o anexo ...
echo "$mensagem" | mail -s "$assunto" -a "$caminho_do_arquivo" "$destinatario"
