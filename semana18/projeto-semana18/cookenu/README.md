### PROJETO COOKENU

É uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.

### FUNCIONALIDAS:

### 1. Cadastro

Como o projeto está no início, o usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 carácteres.

### 2. Login

Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar um token.

### 3. Informações do próprio perfil

A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

### 4. Criar receitas

O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

### 5. Seguir usuário

Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

### 6. Feed

Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.

### ENDPOINTS PARA MVP

Todos os endpoints, com exceção do Signup e Login, devem exigir autenticação.

### Signup

Método: POST
Path: /signup

Entradas:

Body

{
	"name": "Alice",
	"email": "alice@lbn.com",
	"password": "123456"
}

Saídas:

Body

{
	"access_token": "token de acesso"
}

Observações:

- O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
- O seu código deve gerar o id do usuário

### Login

Método: POST
Path: /login

Entradas:

Body

{
	"email": "alice@lbn.com",
	"password": "123456"
}

Saídas

Body

{
	"access_token": "token de acesso"
}


Observações:

- O seu código deve validar se os dois campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos

### Pegar próprio perfil

Método: GET
Path: /user/profile

Entradas:

Headers

Authorization: "token de autenticação"

Saídas

Body

{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}

### Pegar perfil de outro usuário

Método: GET
Path: /user/:id

Entradas:

Path Param

id: "id do usuário"

Headers

Authorization: "token de autenticação"

Saídas

Body

{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}

### Criar receita

Método: POST
Path: /recipe

Entradas:

Headers

Authorization: "token de autenticação"

Body

{
	"title": "título da receita",
	"description": "descrição da receita"
}

Observações:

- Perceba que, no banco de dados, devemos guardar a data de criação da receita, mas o usuário não envia. Você deve assumir que a receita foi criada no momento em que o usuário bate nessa requisição

### Pegar receita

Método: GET
Path: /recipe/:id

Entradas:

Path Param

id: "id da receita"

Headers

Authorization: "token de autenticação"

Saídas

Body

{
	"id": "id da receita",
	"title": "Ovo Frito",
	"description": "Pega o ovo, põe na frigideira e reza!"
	"cratedAt": "31/12/2020"
}