### Exercício 1

a)
Chave estrangeira (Foreign Key) é uma chave que estabelece relação entre duas tabelas, ela deve ser referenciada pela PRIMARY KEY. 

b)
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id INT(11),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001","Muito engraçado e com ótimo elenco de atores", 7, "1");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("002","História não muito bem contada, não é engraçado", 3, "2");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("003","Excelente história de ficção, muita ação e atuação excelente", 9.8, "3");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("004","Melhor filme brasileiro de todos os tempos!", 9.9, "4");

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-leandro-momose`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Ele retorna um erro onde não pode adicionar ou atualizar a linha filha pois a chave estrangeira não consegue se referenciar

d)
ALTER TABLE Filmes DROP COLUMN avaliação;

e)
Error Code: 1054. Unknown column 'avaliação' in 'where clause'
O erro diz que a coluna 'avaliação' é desconhecida 

### Exercício 2

a)
A tabela possui duas colunas de id´s que se relacionam com duas tabelas (Movie e Actor)

b)
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "1", "003");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "2", "004");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "3", "007");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "4", "003");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "1", "004");
INSERT INTO MovieCast(movie_id, actor_id) VALUES( "2", "007");

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-leandro-momose`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

Ele retorna um erro onde não pode adicionar ou atualizar a linha filha pois a chave estrangeira não consegue se referenciar

d)
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-leandro-momose`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ele retorna um erro onde não pode deletar ou atualizar a linha parente pois a chave estrangeira falhou

### Exercício 3

a) A query faz a relação entre as duas tabelas (Movie e Rating), retornando as informações das duas tabelas, porém elas juntas. O operador ON, é aa condição pela qual as duas tabelas são juntadas, sem ele, são retornados combinações de todos os itens das duas tabelas

b)
SELECT Filmes.id, nome, rate  FROM Filmes 
INNER JOIN Rating 
ON Filmes.id = Rating.movie_id;

### Exercício 4

a)
SELECT Filmes.id, nome, rate, comment FROM Filmes
LEFT JOIN Rating 
ON Filmes.id = Rating.movie_id;

b)
SELECT Filmes.id, nome, MovieCast.actor_id FROM Filmes 
RIGHT JOIN MovieCast 
ON Filmes.id = MovieCast.movie_id;

c)
SELECT AVG(rate), Filmes.nome FROM Filmes 
LEFT JOIN Rating 
ON Filmes.id = Rating.movie_id 
GROUP BY Filmes.id;

### Exercício 5

a)
Ela cria uma única tabela com a junção dos dados das 3 tabelas (Movie, Actor e MovieCast). Ela faz primeiramente a relação da tabela MovieCast com a Movie, e retorna todos os dados de Movie e de MovieCast. Depois, ela relaciona a tabela Actor com a tabela MovieCast, retornando apenas os itens que se relacionam, juntando então as 3 tabelas. Os 2 JOIN são para conseguirmos unir as 3 tabelas.

b)
SELECT Filmes.id AS movie_id, Filmes.nome, Actor.id AS actor_id, Actor.nome FROM Filmes
LEFT JOIN MovieCast 
ON Filmes.id = MovieCast.movie_id
JOIN Actor 
ON Actor.id = MovieCast.actor_id;

c)
A query apresenta um erro de sintaxe para tittle do movie (m,tittle) quando na verdade deveria ser m.tittle

d)
SELECT Filmes.nome, Actor.nome, rate, comment FROM Filmes
LEFT JOIN MovieCast 
ON Filmes.id = MovieCast.movie_id
JOIN Actor 
ON Actor.id = MovieCast.actor_id
LEFT JOIN Rating 
ON Rating.id = Filmes.id;

### Exercício 6

a)
Arelação é vários para vários (N:M)

b)
CREATE TABLE Oscars (
	oscar_id VARCHAR(255) PRIMARY KEY,
	oscar_name VARCHAR(255) NOT NULL,
    oscar_date DATE NOT NULL,
    movie_id INT(11),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

c)
INSERT INTO Oscars(oscar_id, oscar_name, oscar_date, movie_id) VALUES( "1", "Melhor filme 2009", "2009-02-25", 4);
INSERT INTO Oscars(oscar_id, oscar_name, oscar_date, movie_id) VALUES( "2", "Melhor direção", "2010-02-24", 3);
INSERT INTO Oscars(oscar_id, oscar_name, oscar_date, movie_id) VALUES( "3", "Melhor Ator", "2011-02-23", 2);
INSERT INTO Oscars(oscar_id, oscar_name, oscar_date, movie_id) VALUES( "4", "Melhor Atriz", "2012-02-22", 1);

d)
SELECT Filmes.id AS "movie_id", Filmes.nome, Oscars.oscar_name FROM Filmes 
LEFT JOIN Oscars ON Filmes.id = Oscars.movie_id;