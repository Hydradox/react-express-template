/*******************************************
 *      REACT AND EXPRESS TEMPLATE
 * 
 * This file is responsible for setting up
 * the express server, and also for setting
 * up the React app.
 * 
 * @author Jaime Cantos
 * @version 1.0.0
 * @license ISC
 *******************************************/

// Dotenv configuration
import dotenv from 'dotenv';
dotenv.config();


// Import required modules
import http from './modules/express.js';


// Init modules
http.config();