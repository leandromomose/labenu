Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

### TABLES:

CREATE TABLE TodoListUser (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TodoListTask (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    limit_date DATE NOT NULL,
    status ENUM("TO_DO", "DOING", "DONE") NOT NULL DEFAULT "TO_DO",
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id VARCHAR(255),
    responsible_user_id VARCHAR(255),
    PRIMARY KEY (task_id, responsible_user_id),
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
);

### ENDPOINTS:

### 1. Criar usuário

- Método: PUT
- Path: /user
- Body:
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}

**Observações**:

- O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
- O seu código deve gerar o id do usuário

### 2. Pegar usuário pelo id

- Método: GET
- Path: /user/:id
- PAth Param: é o id do usuário
- Body de resposta:
{
	"id": "001",
	"nickname": "astrodev"
}

**Observações**:

- O endpoint deve retornar um erro se não encontrar o usuário

### 3. Editar usuário

- Método: POST
- Path: /user/edit/:id
- PAth Param: é o id do usuário
- Body:
{
	"name": "Astro Dev",
	"nickname": "astrodev"
}

**Observações**:

- O seu código só deve alterar o que for enviado
- Se algum valor enviado for vazio, deve retornar um erro

### 4. Criar tarefa

- Método: PUT
- Path: /task
- Body:
{
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"creatorUserId": "001"
}

**Observações**:

- O seu código deve validar se todos os campos não estão vazios,
- O seu código deve gerar o id da tarefa,
- A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco

### 5. Pegar tarefa pelo id

- Método: GET
- Path: /task/:id
- PAth Param: é o id da tarefa
- Body de resposta:
{
	"taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"limitDate": "04/05/2020",
	"status": "to_do",
	"creatorUserId": "001",
	"creatorUserNickname": "astrodev"
}

**Observações**:

- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`)