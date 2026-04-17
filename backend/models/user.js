const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Verifique se está fullName e não name
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Middleware para criptografar a senha antes de salvar no banco
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);