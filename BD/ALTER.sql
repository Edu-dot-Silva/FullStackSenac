-- ADICIONANDO COLUNAS NA TABELA
ALTER TABLE alunos ADD telefone VARCHAR(15);

DESCRIBE alunos;

SELECT * FROM alunos;

-- RENOMEANDO COLUNAS
ALTER TABLE alunos CHANGE COLUMN telefone celular VARCHAR(15);

SELECT * FROM alunos WHERE idade < 20;

SELECT NOME, CURSO FROM alunos WHERE idade BETWEEN 20 AND 22;

SELECT * FROM alunos WHERE curso = 'Física' OR curso = 'Química';

SELECT * FROM alunos WHERE curso LIKE '%Física%';

SELECT * FROM alunos WHERE CELULAR IS NULL;

-- inserindo valores nas colunas novas dos alunos antigos antes do celular
UPDATE alunos SET celular = '11111-1111' WHERE id = 1;
UPDATE alunos SET celular = '22222-2222' WHERE id = 2;
UPDATE alunos SET celular = '33333-3333' WHERE id = 3;
UPDATE alunos SET celular = '44444-4444' WHERE id = 4;
UPDATE alunos SET celular = '55555-5555' WHERE id = 5;
UPDATE alunos SET celular = '66666-6666' WHERE id = 6;
UPDATE alunos SET celular = '77777-7777' WHERE id = 7;
UPDATE alunos SET celular = '88888-8888' WHERE id = 8;
UPDATE alunos SET celular = '99999-9999' WHERE id = 9;
UPDATE alunos SET celular = '00000-0000' WHERE id = 10;


DELETE FROM alunos WHERE id = 10;