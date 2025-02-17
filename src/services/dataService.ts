import { MysqlModel, getData as getMysqlData } from '../models/mysqlModel';
import { PostgresModel, getData as getPostgresData } from '../models/postgresModel';

export class DataService {
    private mysqlModel: typeof MysqlModel;
    private postgresModel: typeof PostgresModel;

    constructor() {
        this.mysqlModel = MysqlModel;
        this.postgresModel = PostgresModel;
    }

    public async getFullJoinData() {
        try {
            const mysqlData = await getMysqlData(); // Método para obtener datos de la tabla en Sakila
            const postgresData = await getPostgresData(); // Método para obtener datos de la tabla en Northwind

            const result: any[] = [];

            // Realiza el FULL JOIN manualmente
            mysqlData.forEach((mysqlRow: any) => {
                const matchingPostgresRow = postgresData.find((postgresRow: any) => postgresRow.customer_id === mysqlRow.actor_id);
                if (matchingPostgresRow) {
                    result.push({ ...mysqlRow.toJSON(), ...matchingPostgresRow.toJSON() });
                } else {
                    result.push(mysqlRow.toJSON());
                }
            });

            postgresData.forEach((postgresRow: any) => {
                const matchingMysqlRow = mysqlData.find((mysqlRow: any) => mysqlRow.actor_id === postgresRow.customer_id);
                if (!matchingMysqlRow) {
                    result.push(postgresRow.toJSON());
                }
            });

            return result;
        } catch (error) {
            console.error('Error al realizar el FULL JOIN:', error);
            throw error;
        }
    }
}