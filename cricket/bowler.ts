export class Bowler {
    name: string;
    runsGiven: number;
   wicketCount:number;
   ballsBowled:Array<number>;
   maidenOvers:number;
    constructor(name: string) {
        this.name = name;
        this.runsGiven = 0;
        this.wicketCount = 0;
    }
    get numberOfRunsGiven() {
        return this.runsGiven;
    }
    get numberOfWickets() {
        return this.wicketCount;
    }
    addRunsGiven(run: number) {
        this.runsGiven += run;
    }
    addWickets(w: number) {
        this.wicketCount += w;
    }
    moverCal()
    {
       

    }
}