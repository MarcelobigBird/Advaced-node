# Autenticaćao

> ## Dados:
* Token de Acesso

>## Fluxo Primário
1. Obter dados (nome, email e facebook ID) da API DO Facebook
2. Consultar se existe um usuário com o email recebido acima
3. Criar uma conta para o usuário com os dados recebidos Facebook
4. Criar um token de acesso, a partir do Id do usuário, com expiraćão em 30 minutos
5. Retornar o token de acesso gerado

> ## Fluxo alternativo: Usuário já existe
3. Atualizar a conta do usuário com os dados recebidos Facebook (Facebook ID e nome - sô atualizar o nome caso a conta do usuário não possua nome)

> ## Fluxo de excećão: Token inválido ou expirado
1. Retornar um erro de autenticaćão