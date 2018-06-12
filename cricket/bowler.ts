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
        this.ballsBowled=[];
        this.maidenOvers=0;
    }
    // get numberOfRunsGiven() {
    //     return this.runsGiven;
    // }
    // get numberOfWickets() {
    //     return this.wicketCount;
    // }
    // addRunsGiven(run: number) {
    //     this.runsGiven += run;
    // }
    // addWickets(w: number) {
    //     this.wicketCount += w;
    // }
    moverCal()
    {
        let sum=0;
       for(let i=0;i<this.ballsBowled.length;i+=6)
       {
       
       for(let j=i;j<i+6;j++)
       {
         sum+=this.ballsBowled[j];
        }
        if(sum==0)
        this.maidenOvers++;
        
    }
}
}