import { Router } from 'express';


export default function() {
    var routes = Router();

    routes.get('/', (req, res) => {
        res.json({
            message: 'Hello World!'
        });
    })


    return routes;
}