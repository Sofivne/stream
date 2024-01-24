import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('stream', 'root', '21042001', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

