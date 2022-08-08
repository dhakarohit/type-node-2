import { item, BaseItem } from "./item.interface";
import { Items } from "./items.interface";

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

export const findAll = async (): Promise<item[]> => Object.values(items);
export const find = async (id: number): Promise<item> => items[id] ;

export const create = async (newItem: BaseItem): Promise<item> => {
    const id = new Date().valueOf();
    console.log(id,"iddddddddd");

    items[id] = {
        id,
        ...newItem
    };

    return items[id]
};

export const update = async (id: number, itemUpdate: BaseItem): Promise<item | null> => {
    const itemss = await find(id);
    if (!itemss) {
        return null;
    };
    items[id] = {id, ...itemUpdate};

    return items[id]
};

export const remove  = async (id: number): Promise<null | void> =>{
    const itemss = await find(id);

    if (!itemss) {
        return null;
    };

    delete items[id];
}