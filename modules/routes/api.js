import { Router } from 'express';


export default function() {
    var routes = Router();

    routes.get('/test', (req, res) => {
        // Random number between 1000 and 5000
        let timeout = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        console.log(`Waiting ${timeout}ms`);

        setTimeout(() => {

            // Test JSON response to test server API
            res.json({
                users: [
                    {
                        name: 'John Doe',
                        age: '25'
                    },
                    {
                        name: 'Jane Doe',
                        age: '24'
                    },
                    {
                        name: 'Jack Doe',
                        age: '23'
                    },
                    {
                        name: 'Jill Doe',
                        age: '22'
                    },
                    {
                        name: 'Jenny Doe',
                        age: '21'
                    }
                ]
            });
        }, timeout);
    })


    return routes;
}