import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(userRoutes);

app.listen(port, () => {
    console.log('Server is listening on port', port);
});

app.use((err, req, res,next) => {
    const statusCode = err.status || 500;
    const errorResponse = {
        error_message: err.message,
        data: req.body,
        key: err.details ? err.details[0].key : undefined,
        success: false,
    };
    res.status(statusCode).json([errorResponse]);
});
