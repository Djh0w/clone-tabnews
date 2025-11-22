# clone-tabnews

Projeto para implementação do https://www.tabnews.com.br (curso dev)

#Comandos git
git log
git log --oneline
git status
git add .gitignore
git diff
git commit
git commit --amend

#Nao esquecer de subir o banco - entrar na pasta infra
docker compose up -d

#checar se precisa deixar o bd startado. Se precisar:
docker start infra-database-1

#Ordem
1 - Banco de dados
2 - Projeto
3 - Testes

#Onde começa?
Controller -> Model -> Controller -> View
Controller coordenam operações entre um ou mais models, e as views retornam os dados para o cliente.

#Porque criar um model?
Reaproveitamento de Código.

#Querys
Sem parametros.
Parametros fixos.
Parametros dinamicos.
