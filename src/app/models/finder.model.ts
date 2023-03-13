import { Entity } from "./entity.model";
import { Explorer } from "./explorer.model";
import { Trip } from "./trip.model";

export class Finder extends Entity{
    private _keyword!: string;
    private _priceFrom!: number;
    private _priceTo!: number;
    private _dateFrom!: Date;
    private _dateTo!: Date;
    private _explorer!: Explorer;
    private _result: Trip[];

    constructor() {
        super();
        this._result = [];
    }

    get keyword(): string {
        return this._keyword;
    }

    set keyword(keyword: string) {
        this._keyword = keyword;
    }

    get priceFrom(): number {
        return this._priceFrom;
    }

    set priceFrom(priceFrom: number) {
        this._priceFrom = priceFrom;
    }

    get priceTo(): number {
        return this._priceTo;
    }

    set priceTo(priceTo: number) {
        this._priceTo = priceTo;
    }

    get dateFrom(): Date {
        return this._dateFrom;
    }

    set dateFrom(dateFrom: Date) {
        this._dateFrom = dateFrom;
    }

    get dateTo(): Date {
        return this._dateTo;
    }

    set dateTo(dateTo: Date) {
        this._dateTo = dateTo;
    }

    get explorer(): Explorer {
        return this._explorer;
    }

    set explorer(explorer: Explorer) {
        this._explorer = explorer;
    }

    get result(): Trip[] {
        return this._result;
    }

    set result(result: Trip[]) {
        this._result = result;
    }
}
