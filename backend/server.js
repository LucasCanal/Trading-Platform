const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("🚀 Conectado ao MongoDB Atlas"))
    .catch(err => console.error("❌ Erro ao conectar:", err));

// --- ROTA DE REGISTRO (CREATE ACCOUNT) ---
// No seu backend (ex: routes/auth.js ou server.js)
app.post("/api/auth/register", async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        console.log("📥 Body recebido:", req.body); // <- adiciona isso

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Usuário já existe" });

        const user = new User({ fullName, email, password });
        await user.save();

        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        console.error("Erro no registro COMPLETO:", error); // <- troca essa linha
        res.status(500).json({ message: "Erro no servidor" });
    }
});

// --- ROTA DE LOGIN ---
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Credenciais inválidas" });

        // Compara a senha digitada com a criptografada no banco
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Credenciais inválidas" });

        // Gera o Token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            token,
            user: { id: user._id, fullName: user.fullName, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ message: "Erro no servidor" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`📡 Servidor rodando na porta ${PORT}`));