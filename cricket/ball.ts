export interface Ball{
    runsScored:number;
    isOut:boolean;
    isExtra?:boolean;
    extraType?:string;
    extraInfo?:{ 
        runsOffered:number;
    }
    dismissalType?: string;
    dismissalInfo?: {
        fielderName: string | null;
        hasBatsmanCrossed: boolean;
        //batsmanOut: string;
    };
    batsmanName: string;
    bowlerName: string;
    // constructor()
    // {
    //     this.runsScored=0;
    //     this.isOut=false;
    //     this.isExtra=false;
    //     this.extraType=null;
    //     this.extraInfo.runsOffered=0;
    //     this.dismissalType=null;
    //     this.dismissalInfo.fielderName=null;
    //     this.dismissalInfo.hasBatsmanCrossed=false;
    //     //this.dismissalInfo.batsmanOut=null;
    //     this.batsmanName=null;
    //     this.bowlerName=null;
    // }
}