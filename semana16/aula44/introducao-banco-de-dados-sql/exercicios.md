### Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

a) 
CREATE TABLE - para criar uma tabela
PRIMARY KEY - identificar único não alterável
NOT NULL - não pode ser nulo
VARCHAR(255) - string com número máximo de caracteres
DATE - representa uma data (YYYY-MM-DD)

b)
O comando SHOW DATABASES retornou um database com o nome do meu database e um information_schema
O comando SHOW TABLES retornou o nome das tabelas existentes dentro do meu database

c)
O comando DESCRIBE Actor retorna a tabela por inteiro, mostrando todas as informações e comandos, ou seja, toda a sua estrutura com todas as linhas e colunas especificadas

### Exercício 2

a)
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
    );

b) 
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMÁRIA'

O erro diz que um item com uma chave primária já existente não é possivel de ser adicionado na tabela, pois a primary key é única para cada item.

c)
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. Contagem da coluna não combina com a contagem de valor na linha 1

O erro diz que a contagem das colunas não condiz com a quantidade de valores apresentados. Para corrigir o erro, basta acrescentar as colunas que faltam, ficando assim:

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)
Error Code: 1364. Field 'nome' doesn't have a default value
Código de erro: 1364. O campo 'nome' não possui um valor padrão

Como o campo nome foi criado com o comando NOT NULL, ele é de preenchimento obrigatório, e como não foi informado este campo na inserção da query, foi retornado a mensagem de erro. Para corrigir o código ficaria assim:

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "004",
  "Will Smith",
  400000,
  "1949-04-18", 
  "male"
);

e)
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

O erro está apontando que existe um erro na hora de declarar o valor do birth_date, que no caso é a falta das aspas. O código correto ficaria:

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f)
INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "006", 
  "Keanu Reeves",
  500000000,
  "1964-09-02", 
  "male"
);

INSERT INTO Actor (id, nome, salary, birth_date, gender)
VALUES(
  "007", 
  "Jennifer Aniston",
  400000000,
  "1969-02-11", 
  "female"
);

### Exercício 3

a)
SELECT * FROM Actor
WHERE gender = "female";

b)
SELECT salary from Actor
WHERE nome = "Tony Ramos";

c)
SELECT * FROM Actor
Where gender = "invalid";

Ele não retorna nenhum item, pois não existe nenhum item com o valor de gender 'invalid'

d)
SELECT id, nome, salary FROM Actor
WHERE salary <= 500000;

e)
Error Code: 1054. Unknown column 'name' in 'field list'
Código de erro: 1054. Coluna 'name' desconhecida no 'campo lista'

O erro diz que não existe coluna denominada 'nome' na tabela, o correto seria 'name'

SELECT id, name from Actor WHERE id = "002";

### Exercício 4

a)
A query acima seleciona os atores cujo nome inicia com a letra A ou a letra J e que possuem salario superior à R$300.000

b)
SELECT * FROM Actor
WHERE nome NOT LIKE "A%" AND salary > 350000;

c)
SELECT * FROM Actor
WHERE nome LIKE "%G%" OR nome LIKE "%g%";

d) 
SELECT * FROM Actor
WHERE (nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;

### Exercício 5

a)
CREATE TABLE Filmes (
	id INT PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT (255) NOT NULL,
    data_lançamento DATE NOT NULL,
    avaliação INT NOT NULL
);

A query cria a tabela Filmes, onde as colunas são: id, nome, sinopse, data de lançamento e avaliação

b)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

c)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

d)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

e)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "004", 
  "Cidade de Deus",
  "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
  "2002-08-30", 
  9
);

### Exercício 6

a)
SELECT id, nome, avaliação FROM Filmes
WHERE id ="004";

b)
SELECT * FROM Filmes
WHERE nome ="Cidade de Deus";

c)
SELECT id, nome, sinopse FROM Filmes
WHERE avaliação > 7;

### Exercício 7

a)
SELECT * FROM Filmes
WHERE nome LIKE "%vida%";

b)
SELECT * FROM Filmes
WHERE nome LIKE "%Cidade%" OR sinopse LIKE "%flor%";

c)
SELECT * FROM Filmes
WHERE data_lançamento < "2021-01-11";

d)
SELECT * FROM Filmes
WHERE data_lançamento < "2021-01-11" AND (nome LIKE "%Deus%" OR sinopse LIKE "%jovem%") AND avaliação > 7;