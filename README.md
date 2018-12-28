CRIANDO PRIMEIRO PROTOTICO REACT

POSSIVEIS ERROS:
1 Caso o react-native alegue que existe mais de um arquivo sendo monitorado, rodar o seguinte comando.

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
