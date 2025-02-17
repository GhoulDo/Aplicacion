import { Sequelize } from 'sequelize';

// Configuración de la base de datos MySQL
const mysqlSequelize = new Sequelize('sakila', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

// Configuración de la base de datos PostgreSQL
const postgresSequelize = new Sequelize('northwind', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

export const connectToDatabases = async () => {
    try {
        await mysqlSequelize.authenticate();
        console.log('Conexión a MySQL establecida con éxito.');

        await postgresSequelize.authenticate();
        console.log('Conexión a PostgreSQL establecida con éxito.');
    } catch (error) {
        console.error('No se pudo conectar a las bases de datos:', error);
    }
};

export { mysqlSequelize, postgresSequelize };