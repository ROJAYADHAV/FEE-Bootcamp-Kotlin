export class batsman {
    name: string;
    runsScored: number;
    ballsfaced: number;
    fieldername: string;
    bowler: string;
    notout: boolean;
    constructor(name: string) {
        this.name = name;
        this.runsScored = 0;
        this.ballsfaced = 0;
        this.notout = false;
    }
    get numberOfRuns() {
        return this.runsScored;
    }
    get numberOfballsfaced() {
        return this.ballsfaced;
    }
    addRuns(run: number) {
        this.runsScored += run;
    }
}