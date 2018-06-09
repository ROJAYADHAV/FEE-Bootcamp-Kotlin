import { batsman } from './batsman';
import { bowler } from './bowler';
import { Ball } from './ball';
//var input:Array<Ball>;
var batsmanarray: Array<batsman>;
var bowlerarray: Array<bowler>;
var totalscore: number = 0;
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
    var bt = findbatsman(input[i].batsmanName);
    var bw = findbowler(input[i].bowlerName);
    bt.runsScored += input[i].runsScored;
    bw.ballsbowled.push(input[i].runsScored);
    bt.ballsfaced++;
    bt.bowler = input[i].bowlerName;
    if (input[i].isOut) {
        bt.fieldername = input[i].dismissalInfo.fielderName;
        bt.notout = false;
        bw.wicketcount++;
    }
    else {
        if (input[i].isExtra) {
            totalscore += input[i].extraInfo.runsOffered;
            bw.ballsbowled.push(input[i].extraInfo.runsOffered);
        }
    }
    


}
function findbatsman(bname) {
    if (batsmanarray.length != 0) {
        for (let i = 0; i < batsmanarray.length; i++)
            if (batsmanarray[i].name == bname)
                return batsmanarray[i];
    }
    else {
         let temp=new batsman(bname);
        batsmanarray.push(temp);
        return temp;
    }
}
function findbowler(bname) {
    if (bowlerarray.length != 0) {
        for (let i = 0; i < bowlerarray.length; i++)
            if (bowlerarray[i].name == bname)
                return bowlerarray[i];
    }
    else {
        let temp=new bowler(bname)
        bowlerarray.push(temp);
        return temp;
    }
}
function displayresult()
{

}