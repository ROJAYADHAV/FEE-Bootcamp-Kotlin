export class bowler {
    name: string;
    runsgiven: number;
   wicketcount:number;
   ballsbowled:Array<number>;
   maidenovers:number;
    constructor(name: string) {
        this.name = name;
        this.runsgiven = 0;
        this.wicketcount = 0;
    }
    get numberOfRunsgiven() {
        return this.runsgiven;
    }
    get numberOfwickets() {
        return this.wicketcount;
    }
    addRunsGiven(run: number) {
        this.runsgiven += run;
    }
    addWickets(w: number) {
        this.wicketcount += w;
    }
    movercal()
    {
       

    }
}