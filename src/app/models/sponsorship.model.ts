import { Entity } from "./entity.model";
import { Sponsor } from "./sponsor.model";
import { Trip } from "./trip.model";

export class Sponsorship extends Entity {
    private _banner!: string;
    private _link!: string;
    private _isPaid!: boolean;
    private _trip!: Trip;
    private _sponsor!: Sponsor;

    constructor() {
        super();
    }
    
    // Getters
    get banner(): string {
        return this._banner;
    }
    get link(): string {
        return this._link;
    }
    get isPaid(): boolean {
        return this._isPaid;
    }
    get trip(): Trip {
        return this._trip;
    }
    get sponsor(): Sponsor {
        return this._sponsor;
    }

    // Setters
    set banner(banner: string) {
        this._banner = banner;
    }
    set link(link: string) {
        this._link = link;
    }
    set isPaid(isPaid: boolean) {
        this._isPaid = isPaid;
    }
    set trip(trip: Trip) {
        this._trip = trip;
    }
    set sponsor(sponsor: Sponsor) {
        this._sponsor = sponsor;
    }
}
