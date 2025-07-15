import express, {Request, Response, json} from 'express';


const app = express();
const port = process.env.PORT;

app.use(json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({player: "beckham"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

