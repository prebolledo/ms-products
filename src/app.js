import api from '@amacl/roboc-api';
import { apiOptions } from './config';
import routes from './routes';

const bootstrap = () => {
    api(apiOptions,(router, app) => {
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        }); 
        
        routes(router, app);

        return router;
    });
};

export {
    bootstrap,
}