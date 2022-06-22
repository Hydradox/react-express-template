import { Router } from 'express';


export default function() {
    var routes = Router();

    routes.get('/test', (req, res) => {
        setTimeout(() => {
            res.json({
                users: [
                    {
                        name: 'John Doe',
                        age: '25'
                    },
                    {
                        name: 'Jane Doe',
                        age: '24'
                    }
                ]
            });
        }, 1000);
    })


    return routes;
}