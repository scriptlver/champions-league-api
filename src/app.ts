import express, {Request, Response} from 'express';
import { getPLayer as getPlayer } from './controllers/players-controller';

function createApp(){
    const app = express();
    
    app.use(express.json());
    
    app.get('/', getPlayer);

    return app;
}

export default createApp;


