import express, {Application, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import dbConn from './dbconfig/mongoose.connection';
import {itemRouter } from './items/item.routes';
dotenv.config();
const app: Application = express();
 const port = process.env.port

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/menu/items", itemRouter);

const add = (a: number, b: number): number => {return a+b;}

app.get("/",(req: Request, res: Response) =>{
    let respon = add(2,2);
    res.sendStatus(200);

});
// app.post()

app.listen(80,async()=>{
    console.log(`server has been started`,port);
    await dbConn();
    console.log("db has been connected");

})