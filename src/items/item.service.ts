import { item, BaseItem } from "./item.interface";
import { Items } from "./items.interface";
import mongoose from "mongoose";

let items: Items = {
    1 : {
        id: 1,
        name: "burgur",
        price :230
    },
    2: {
        id : 2,
        name: "burgur2",
        price: 250
    }
};

const itemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

const itemModel = mongoose.model<item>("item", itemSchema);

export const findAll = async (): Promise<item[]> => itemModel.find();
export const find = async (id: number): Promise<item | null> => itemModel.findOne({id:id });

export const create = async (newItem: BaseItem): Promise<item> => {
    const id = new Date().valueOf();
    console.log(id,"iddddddddd");
    let result = await itemModel.create({
        id,
        ...newItem
    });

    return result;
};

export const update = async (id: number, itemUpdate: BaseItem): Promise<item | null> => {
    const itemss = await itemModel.findOneAndUpdate({id:id},{...itemUpdate},{new: true});
    if (!itemss) {
        return null;
    };

    return itemss;
};

export const remove  = async (id: number): Promise<null | void> =>{
    const itemss = "";

    if (!itemss) {
        return null;
    };

    delete items[id];
}