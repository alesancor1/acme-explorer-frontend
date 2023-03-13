import { Actor } from "./actor.model";
import { Application } from "./application.model";
import { Finder } from "./finder.model";

export class Explorer extends Actor {
    private applications!: Application[]; // Application ids
    private finders!: Finder[];      // Finder ids

    constructor() {
        super();
        this.applications = [];
        this.finders = [];
    }

    getApplications(): Application[] {
        return this.applications;
    }

    setApplications(applications: Application[]): void {
        this.applications = applications;
    }

    addApplication(application: Application): void {
        this.applications.push(application);
    }

    removeApplication(application: Application): void {
        this.applications = this.applications.filter(a => a !== application);
    }

    getFinders(): Finder[] {
        return this.finders;
    }

    setFinders(finders: Finder[]): void {
        this.finders = finders;
    }

    addFinder(finder: Finder): void {
        this.finders.push(finder);
    }

    removeFinder(finder: Finder): void {
        this.finders = this.finders.filter(f => f !== finder);
    }
}
