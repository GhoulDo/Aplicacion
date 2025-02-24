import { mysqlSequelize } from '../config/database';
import { DataTypes, Model } from 'sequelize';

class MysqlModel extends Model {}

MysqlModel.init({
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    last_update: DataTypes.DATE
}, {
    sequelize: mysqlSequelize,
    modelName: 'mysqlModel',
    tableName: 'actor', // Reemplaza con el nombre de tu tabla
    timestamps: false // Desactiva las marcas de tiempo automáticas
});

// Nuevos modelos
class Country extends Model {
    country_id!: number;
    country!: string;
    last_update!: Date;
}
Country.init({
    country_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    country: DataTypes.STRING,
    last_update: DataTypes.DATE
}, {
    sequelize: mysqlSequelize,
    modelName: 'country',
    tableName: 'country',
    timestamps: false
});

export async function getData(options = {}) {
    return await MysqlModel.findAll(options);
}

export async function getCountryData() {
    return await Country.findAll();
}

export { MysqlModel, Country };