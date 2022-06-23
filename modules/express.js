// Import required modules
import express from 'express';
import { isProd } from './functions.js';

// Import config
import config from '../configs/express.json' assert { type: 'json' };
import routes from './routes/routes.js';
import api from './routes/api.js';

// Consts and Vars
const app = express();
const port = (isProd ? config.production.port : config.development.port);



export default {
    config: () => {
        // Middleware
        if(isProd) app.use(express.static(config.static));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        
        // Set up routes in external file
        // app.use('/', routes());
        app.use('/api', api());


        // Run Express server
        app.listen(port)
        .on('error', err => {
            console.log(err);
        }).on('listening', () => {
            console.log(`Server listening on port ${port}`);
        }).on('connection', () => {
            console.log(`User connected!`);
        });
    }
}