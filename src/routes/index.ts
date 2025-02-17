import { Router, Express } from 'express';
import { DataController } from '../controllers/dataController';

const router = Router();
const dataController = new DataController();

export function setRoutes(app: Express) {
    app.use('/api/data', router);
    router.get('/full-join', dataController.getFullJoinData.bind(dataController));

    // Define tus rutas aquí
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    // Otras rutas...
}