import { Country, getCountryData } from '../models/mysqlModel';
import { PostgresModel, getData as getPostgresData } from '../models/postgresModel';

export class DataService {
    private mysqlCountryModel: typeof Country;
    private postgresModel: typeof PostgresModel;

    constructor() {
        this.mysqlCountryModel = Country;
        this.postgresModel = PostgresModel;
    }

    public async getFullJoinData() {
        try {
            const mysqlCountryData = await getCountryData(); // Datos de la tabla country en Sakila
            const postgresData = await getPostgresData(); // Datos de la tabla customers en Northwind

            const result: any[] = [];

            // Realiza el FULL JOIN manualmente basado en el país
            mysqlCountryData.forEach((mysqlCountryRow: any) => {
                const matchingPostgresRow = postgresData.find((postgresRow: any) => postgresRow.country === mysqlCountryRow.country);
                if (matchingPostgresRow) {
                    result.push({ ...mysqlCountryRow.toJSON(), ...matchingPostgresRow.toJSON() });
                } else {
                    result.push({ ...mysqlCountryRow.toJSON(), ...{ customer_id: null, company_name: null, contact_name: null, contact_title: null, address: null, city: null, region: null, postal_code: null, phone: null, fax: null } });
                }
            });

            postgresData.forEach((postgresRow: any) => {
                const matchingMysqlCountryRow = mysqlCountryData.find((mysqlCountryRow: any) => mysqlCountryRow.country === postgresRow.country);
                if (!matchingMysqlCountryRow) {
                    result.push({ ...{ country_id: null, country: null, last_update: null }, ...postgresRow.toJSON() });
                }
            });

            if (result.length === 0) {
                return { message: 'No se encontraron coincidencias' };
            }

            return result;
        } catch (error) {
            console.error('Error al realizar el FULL JOIN:', error);
            throw error;
        }
    }
}