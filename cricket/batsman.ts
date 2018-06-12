export class Batsman {
    name: string;
    runsScored: number;
    ballsFaced: number;
    fielderName: string;
    runout:boolean;
    bowler: string;
    notOut: boolean;
    constructor(name: string) {
        this.name = name;
        this.runsScored = 0;
        this.ballsFaced = 0;
        this.notOut = true;
        this.runout=false;
    }
    // get numberOfRuns() {
    //     return this.runsScored;
    // }
    // get numberOfBallsFaced() {
    //     return this.ballsFaced;
    // }
    // addRuns(run: number) {
    //     this.runsScored += run;
    // }
}