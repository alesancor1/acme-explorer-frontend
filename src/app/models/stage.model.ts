import { Entity } from "./entity.model";

export class Stage extends Entity {
    private _title: string;
    private _description: string;
    private _price: number;

    constructor(title: string, description: string, price: number) {
        super();
        this._title = title;
        this._description = description;
        this._price = price;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
