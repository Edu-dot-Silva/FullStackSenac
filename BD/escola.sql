-- Estou no SQL Server

CREATE DATABASE escola;

USE escola;

CREATE TABLE alunos(
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    curso VARCHAR(100)
);

INSERT INTO alunos (nome, idade, curso) VALUES
('Maria Souza', 22, 'Medicina'),
('Pedro Oliveira', 19, 'Direito');

ALTER TABLE alunos ADD email VARCHAR(100);

-- Mudar o tipo da coluna
ALTER TABLE alunos ALTER COLUMN idade SMALLINT;

-- Renomear a coluna no SQL Server
sp_rename 'alunos.curso', 'curso_atual';

-- Remover uma coluna
ALTER TABLE alunos DROP COLUMN email;

-- inserindo mais dados na tabela
INSERT INTO alunos (nome, idade, curso_atual) VALUES
('Ana Lima', 21, 'Engenharia'),
('Carlos Pereira', 23, 'Arquitetura');

SELECT * FROM alunos;

-- inserindo 10 registros
insert into alunos (nome, idade, curso) values 
('João Silva', 20, 'Física'),
('Maria Santos', 22, 'Química'),
('Pedro Almeida', 19, 'Biologia'),
('Ana Costa', 21, 'Matemática'),
('Carlos Rodrigues', 23, 'História'),
('Juliana Ferreira', 20, 'Geografia'),
('Lucas Mendes', 22, 'Física'),
('Camila Souza', 19, 'Química'),
('Felipe Oliveira', 21, 'Biologia'),
('Laura Pereira', 23, 'Matemática');

