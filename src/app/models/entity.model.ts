export class Entity {
    protected _id: string;
    protected _version: number;

    constructor() {
        this._id = '0';
        this._version = 0;
    }

    public get id(): string {
        return this._id;
    }

    public get version(): number {
        return this._version;
    }
}
