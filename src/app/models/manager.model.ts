import { Actor } from "./actor.model";
import { Trip } from "./trip.model";

export class Manager extends Actor{
    private _managedTrips: Trip[];

    constructor() {
        super();
        this._managedTrips = [];
    }

    get managedTrips(): Trip[] {
        return this._managedTrips;
    }

    set managedTrips(value: Trip[]) {
        this._managedTrips = value;
    }

    public addManagedTrip(trip: Trip) {
        this._managedTrips.push(trip);
    }

    public removeManagedTrip(trip: Trip) {
        this._managedTrips = this._managedTrips.filter((t) => t.id !== trip.id);
    }

}
