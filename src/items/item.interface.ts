

export interface BaseItem {
    name: string;
    price: number;
};

export interface item extends BaseItem {
    id: number
}