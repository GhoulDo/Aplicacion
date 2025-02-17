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

export async function getData() {
    return await MysqlModel.findAll();
}

export { MysqlModel };