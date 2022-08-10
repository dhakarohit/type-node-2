/**
 * Required External Modules and Interfaces
 */
import express, {Response, Request} from "express";
import * as ItemService from './item.service';
import { item, BaseItem } from "./item.interface";




/**
 * Router Definition
 */

export const  itemRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemRouter.get("/", async(req: Request, res: Response) => {
    try {
        const items : item[] =  await ItemService.findAll();
        res.status(200).send(items);
        
    } catch (e) {
        res.status(500).send(e)
        
    }
})

// GET items/:id

itemRouter.get("/:id",async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try { 
        const item = await ItemService.find(id); 
        if (item) {
            res.status(200).send(item)
        };
        res.status(404).send("item is not found");
    } catch (e) {
        res.status(500).send(e);
    };
});

// POST items
itemRouter.post("/", async(req: Request, res: Response)=>{
    try {
        const item : BaseItem = req.body;
        const newItem = await ItemService.create(item);
        res.status(200).send(newItem);
    } catch (error) {
        res.status(500).send(error);
    }
})

// PUT items/:id

itemRouter.put("/:id", async(req: Request, res: Response) =>{
    const id: number = parseInt(req.params.id, 10);
    try {
        const existinfItem = "";
        // await ItemService.find(id);
        const itemBody: item = req.body;
        if (existinfItem) {
            const itemUpdate = await ItemService.update(id, itemBody);
            return res.status(200).send(itemUpdate);
        };
        const CreateItem = await ItemService.create(itemBody);
        return res.status(200).send(CreateItem);
    } catch (error) {
        res.status(500).send(error);
    };

})

// DELETE items/:id

itemRouter.delete("/:id", async(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    try {
        await ItemService.remove(id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error);
    }
})