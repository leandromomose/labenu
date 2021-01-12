### Exercício 1

a)
Este comando faria uma alteração na estrutura da tabela de atores, removendo a coluna salary

b)
Este comando faria uma alteração na estrutura da tabela de atores, mudando o nome da coluna gender para sex e limitando a quantidade de caracteres do valor em string, para 6

c)
Este comando faria uma alteração na estrutura da tabela de atores, mantendo o nome da coluna gender, porém, limitando a quantidade de caracteres do valor em string, em 255

d)
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100) NOT NULL;

### Exercício 2

a)
UPDATE Actor
SET nome = 'Grazi Massafera',
birth_date = '1982-06-28'
WHERE id = '003';

b)
UPDATE Actor
SET nome = "JULIANA PÃES"
WHERE nome = "Juliana Paes";

UPDATE Actor
SET nome = "Juliana Paes"
WHERE nome = "JULIANA PÃES";

c)
UPDATE Actor
SET nome = 'Nicolas Cage',
salary = 60000000,
birth_date = '1964-01-07',
gender = 'male'
WHERE id = '005';

d)
UPDATE Actor
SET favorite_color = 'blue'
WHERE id = '564';

O erro que aparece é: 
Error Code: 1054. Unknown column 'favorite_color' in 'field list'
Código de erro: 1054. Coluna 'favorite_color' desconhecida no campo da lista

### Exercício 3

a)
DELETE FROM Actor 
WHERE nome = "Fernanda Montenegro";

b)
DELETE FROM Actor
WHERE gender = 'male' AND
salary > 1000000;

### Exercício 4

a)
SELECT MAX(salary) FROM Actor;

b)
SELECT MIN(salary) FROM Actor
WHERE gender = 'female';

c)
SELECT COUNT(*) FROM Actor 
WHERE gender = 'female';

d)
SELECT SUM(salary) FROM Actor;

### Exercício 5

a)
A query retorna a quantidade de atores e a quantidade de atrizes existentes na tabela, separados por gênero, em relação ao gênero

b)
SELECT id, nome FROM Actor
ORDER BY nome DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 6

a)
ALTER TABLE Filmes
ADD playing_limit_date DATE;

b)
ALTER TABLE Filmes
CHANGE avaliação avaliação FLOAT;

c)
UPDATE Filmes
SET playing_limit_date = '2021-01-11'
WHERE id = '1';

UPDATE Filmes
SET playing_limit_date = '2021-12-30'
WHERE id = '2';

d)
DELETE FROM Filmes 
WHERE id = '3';

A query dá uma resposta positiva para a alteração, porém nenhuma atualização acontece, uma vez que o item com o id informado foi deletado

### Exercício 7

a)
SELECT COUNT(*) FROM Filmes
WHERE avaliação > 7.5;

b)
SELECT AVG(avaliação) FROM Filmes;

c)
SELECT COUNT(*) FROM Filmes 
WHERE playing_limit_date > CURDATE();

d)
SELECT COUNT(*) FROM Filmes
WHERE data_lançamento > CURDATE();

e)
SELECT MAX(avaliação) FROM Filmes;

f)
SELECT MIN(avaliação) FROM Filmes;

### Exercício 8

a)
SELECT * FROM Filmes 
ORDER BY nome;

b)
SELECT * FROM Filmes 
ORDER BY nome
LIMIT 5;

c)
SELECT * FROM Filmes
WHERE data_lançamento < CURDATE()
ORDER BY data_lançamento DESC
LIMIT 3;

d)
SELECT * FROM Filmes
ORDER BY avaliação DESC
LIMIT 3;