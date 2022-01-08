import { Category } from "./category";
import { Suppliers } from "./suppliers";

export class Product {

    id?: number;
    name?: string;
    description?: string;
    price?: number;
    category?: Category;
    categoryId?: number;
    suppliers?: Suppliers;
    supplierId?: number;

    constructor() { }
}