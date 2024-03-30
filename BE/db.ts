import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('GastosAppDB', 'sa', 'masterPassword1', {
  host: 'localhost',
  dialect: 'mssql',
});

export default {
  sequelize,
};
