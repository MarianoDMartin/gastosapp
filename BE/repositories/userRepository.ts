import db from '../db';
import User from '../models/User';

// Obtener todos los usuarios
export async function getUsers() {
  await db.sequelize.authenticate();
  return await User.findAll();
}
