import express from 'express';
import sql from 'mssql';
import bcrypt from 'bcryptjs';
import db, { connectDB } from '../config/database.js';
import generateToken from '../utils/generateTokem.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Preencha nome, email e senha.' });
  }

  try {
    const pool = await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.request()
      .input('name', sql.NVarChar(100), name)
      .input('email', sql.NVarChar(150), email)
      .input('password', sql.NVarChar(255), hashedPassword)
      .query(`
        INSERT INTO users (name, email, password)
        OUTPUT INSERTED.id
        VALUES (@name, @email, @password)
      `);

    const userId = result.recordset[0].id;
    const token = generateToken(userId);

    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso.',
      token,
    });
  } catch (error) {
    console.error('Erro no cadastro:', error);
    return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const pool = await connectDB();
    const result = await pool.request()
      .input('email', sql.NVarChar(150), email)
      .query('SELECT TOP 1 * FROM users WHERE email = @email');

    const user = result.recordset[0];

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const token = generateToken(user.id);
    return res.status(200).json({
      message: 'Login realizado com sucesso.',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ message: 'Erro ao realizar login.' });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const pool = await connectDB();
    const result = await pool.request()
      .input('id', sql.Int, req.user.id)
      .query('SELECT id, name, email FROM users WHERE id = @id');

    const user = result.recordset[0];

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return res.status(500).json({ message: 'Erro ao buscar perfil.' });
  }
});

export default router;
