import express from 'express';
import { setRoutes } from './routes/index';
import { connectToDatabases } from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MySQL and PostgreSQL databases
connectToDatabases();

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});