import { postgresSequelize } from '../config/database';
import { DataTypes, Model } from 'sequelize';

class PostgresModel extends Model {}

PostgresModel.init({
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    company_name: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_title: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    region: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING
}, {
    sequelize: postgresSequelize,
    modelName: 'postgresModel',
    tableName: 'customers', // Reemplaza con el nombre de tu tabla
    timestamps: false // Desactiva las marcas de tiempo automáticas
});

export async function getData() {
    return await PostgresModel.findAll();
}

export { PostgresModel };