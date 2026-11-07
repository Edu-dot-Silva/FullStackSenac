import bcrypt from 'bcryptjs';
import db from '../config/database.js';
import generateToken from '../utils/generateTokem.js';

// funcao de cadastro de usuário
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    const token = generateToken(result.insertId);
    return res.status(201).json({ token });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    return res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};

register(
    {
        body: {
            name: 'Richard',
            email: 'Richar@example.com',
            password: 'senha123'
        }
    },
    {
        status: (code) => ({json: (data) => console.log(`Status: ${code}, Response:`, data)}),
    }   
);

