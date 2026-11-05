import bcrypt from 'bcryptjs';
import db from '../config/database.js';
import generateToken from '../utils/generateTokem.js';

// funcao de cadastro de usuário
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);
    const token = generateToken(user.rows[0].id);
    res.json({ token });
};

register({
    body: {
        name: 'joao',
        email: 'joao@exemplo.com',
        password: '123456'
    }
});

