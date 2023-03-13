import { Entity } from "./entity.model";
import { ApplicationStatus } from "./enums/application-status.model";
import { Explorer } from "./explorer.model";
import { Trip } from "./trip.model";

export class Application extends Entity {
    private _status!: ApplicationStatus;
    private _rejectReason!: string;
    private _comments!: string;
    private _explorer!: Explorer;
    private _trip!: Trip;

    constructor() {
        super();
    }

    get status(): ApplicationStatus {
        return this._status;
    }

    set status(status: ApplicationStatus) {
        this._status = status;
    }

    get rejectReason(): string {
        return this._rejectReason;
    }

    set rejectReason(rejectReason: string) {
        this._rejectReason = rejectReason;
    }

    get comments(): string {
        return this._comments;
    }

    set comments(comments: string) {
        this._comments = comments;
    }

    get explorer(): Explorer {
        return this._explorer;
    }

    set explorer(explorer: Explorer) {
        this._explorer = explorer;
    }

    get trip(): Trip {
        return this._trip;
    }

    set trip(trip: Trip) {
        this._trip = trip;
    }
}
