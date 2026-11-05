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