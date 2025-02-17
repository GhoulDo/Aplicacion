import { Request, Response } from 'express';
import { DataService } from '../services/dataService';

export class DataController {
    private dataService: DataService;

    constructor() {
        this.dataService = new DataService();
    }

    public async getFullJoinData(req: Request, res: Response) {
        try {
            const data = await this.dataService.getFullJoinData();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving data', error });
        }
    }
}