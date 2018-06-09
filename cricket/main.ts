import { Batsman } from './batsman';
import { Bowler } from './bowler';
import { Ball } from './ball';
//var input:Array<Ball>;
var batsmanArray: Array<Batsman>;
var bowlerArray: Array<Bowler>;
var totalScore: number = 0;
var input: Array<Ball> = [
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Run Out',
        dismissalInfo: {
            fielderName: 'Root',
            hasBatsmanCrossed: true,

        },
        batsmanName: 'Rahul',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 1,
        isOut: false,
        batsmanName: 'Rohit',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 4,
        isOut: false,
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },

    {
        runsScored: 0,
        isOut: false,
        isExtra: true,
        extraType: 'byes',
        extraInfo: {
            runsOffered: 2
        },
        batsmanName: 'Kohli',
        bowlerName: 'Anderson'
    },
    {
        runsScored: 0,
        isOut: true,
        dismissalType: 'Caught',
        dismissalInfo: {
            fielderName: 'Butcher',
            hasBatsmanCrossed: false
        },
        batsmanName: 'Kohli',
        bowlerName: 'Broad'
    }

]
for (let i = 0; i < input.length; i++) {
    var bt = findBatsman(input[i].batsmanName);
    var bw = findBowler(input[i].bowlerName);
    bt.runsScored += input[i].runsScored;
    bw.ballsBowled.push(input[i].runsScored);
    bt.ballsFaced++;
    bt.bowler = input[i].bowlerName;
    if (input[i].isOut) {
        bt.fielderName = input[i].dismissalInfo.fielderName;
        bt.notOut = false;
        bw.wicketCount++;
    }
    else {
        if (input[i].isExtra) {
            totalScore += input[i].extraInfo.runsOffered;
            bw.ballsBowled.push(input[i].extraInfo.runsOffered);
        }
    }
    


}
function findBatsman(bname) {
    if (batsmanArray.length != 0) {
        for (let i = 0; i < batsmanArray.length; i++)
            if (batsmanArray[i].name == bname)
                return batsmanArray[i];
    }
    else {
         let temp=new batsman(bname);
        batsmanArray.push(temp);
        return temp;
    }
}
function findBowler(bname) {
    if (bowlerArray.length != 0) {
        for (let i = 0; i < bowlerArray.length; i++)
            if (bowlerArray[i].name == bname)
                return bowlerArray[i];
    }
    else {
        let temp=new Bowler(bname)
        bowlerArray.push(temp);
        return temp;
    }
}
function displayResult()
{
    for(let i=0;i<batsmanArray.length;i++)
        {
            console.log(batsmanArray[i].name);
            if(batsmanArray[i].notOut)
                {
                    console.log("not out");
                }
                else
                    {
                        console.log("c"+ batsmanArray[i].fielderName + "b" + batsmanArray[i].bowler);
                    }
                console.log(batsmanArray[i].runsScored+"("+ batsmanArray[i].ballsFaced+ ")");
                    
        }
        console.log("total score:");
}