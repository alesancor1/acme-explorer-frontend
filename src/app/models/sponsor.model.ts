import { Actor } from "./actor.model";
import { Sponsorship } from "./sponsorship.model";

export class Sponsor extends Actor{
    private _sponsorships: Sponsorship[]; // Sponsorships ids

    constructor() {
        super();
        this._sponsorships = [];
    }

    get sponsorships(): Sponsorship[] {
        return this._sponsorships;
    }

    set sponsorships(value: Sponsorship[]) {
        this._sponsorships = value;
    }

    public addSponsorship(sponsorship: Sponsorship) {
        this._sponsorships.push(sponsorship);
    }

    public removeSponsorship(sponsorship: Sponsorship) {
        this._sponsorships = this._sponsorships.filter(s => s.id !== sponsorship.id);
    }

}
