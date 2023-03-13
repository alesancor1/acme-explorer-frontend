import { Application } from "./application.model";
import { Entity } from "./entity.model";
import { Manager } from "./manager.model";
import { Sponsorship } from "./sponsorship.model";
import { Stage } from "./stage.model";

export class Trip extends Entity {
    private _ticker!: string;
    private _title!: string;
    private _description!: string;
    private _price!: number;
    private _requirements!: string;
    private _startDate!: Date;
    private _endDate!: Date;
    private _cancelled!: boolean;
    private _cancelReason!: string;
    private _isPublished!: boolean;
    private _pictures: string[];
    private _manager!: Manager;
    private _sponsorships: Sponsorship[];
    private _applications: Application[];
    private _stages: Stage[];

    constructor() {
        super();
        this._pictures = [];
        this._sponsorships = [];
        this._applications = [];
        this._stages = [];
    }

    get ticker(): string {
        return this._ticker;
    }

    set ticker(value: string) {
        this._ticker = value;
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

    get requirements(): string {
        return this._requirements;
    }

    set requirements(value: string) {
        this._requirements = value;
    }

    get startDate(): Date {
        return this._startDate;
    }

    set startDate(value: Date) {
        this._startDate = value;
    }

    get endDate(): Date {
        return this._endDate;
    }

    set endDate(value: Date) {
        this._endDate = value;
    }

    get cancelled(): boolean {
        return this._cancelled;
    }

    set cancelled(value: boolean) {
        this._cancelled = value;
    }

    get cancelReason(): string {
        return this._cancelReason;
    }

    set cancelReason(value: string) {
        this._cancelReason = value;
    }

    get isPublished(): boolean {
        return this._isPublished;
    }

    set isPublished(value: boolean) {
        this._isPublished = value;
    }

    get pictures(): string[] {
        return this._pictures;
    }

    set pictures(value: string[]) {
        this._pictures = value;
    }

    get manager(): Manager {
        return this._manager;
    }

    set manager(value: Manager) {
        this._manager = value;
    }

    get sponsorships(): Sponsorship[] {
        return this._sponsorships;
    }

    set sponsorships(value: Sponsorship[]) {
        this._sponsorships = value;
    }

    get applications(): Application[] {
        return this._applications;
    }

    set applications(value: Application[]) {
        this._applications = value;
    }

    get stages(): Stage[] {
        return this._stages;
    }

    set stages(value: Stage[]) {
        this._stages = value;
    }

    public addPicture(picture: string) {
        this._pictures.push(picture);
    }

    public addSponsorship(sponsorship: Sponsorship) {
        this._sponsorships.push(sponsorship);
    }

    public addApplication(application: Application) {
        this._applications.push(application);
    }

    public addStage(stage: Stage) {
        this._stages.push(stage);
    }

    public removePicture(picture: string) {
        this._pictures.splice(this._pictures.indexOf(picture), 1);
    }

    public removeSponsorship(sponsorship: Sponsorship) {
        this._sponsorships.splice(this._sponsorships.indexOf(sponsorship), 1);
    }

    public removeApplication(application: Application) {
        this._applications.splice(this._applications.indexOf(application), 1);
    }

    public removeStage(stage: Stage) {
        this._stages.splice(this._stages.indexOf(stage), 1);
    }
}
