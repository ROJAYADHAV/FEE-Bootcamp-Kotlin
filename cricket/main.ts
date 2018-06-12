import { Batsman } from './batsman';
import { Bowler } from './bowler';
import { Ball } from './ball';
(function(){
var batsmanArray: Array<Batsman> = [];//list of batsman
var bowlerArray: Array<Bowler> = [];//list of bowlers
var totalScore: number = 0;
//Array of ball objects which contains each ball information
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
        bowlerName: 'Anderson'
    }

]
//Score calculation
for (let i = 0; i < input.length; i++)
 {

    var bt: Batsman;
//checking whether batsman exists or not. if not creates a batsman object and pushes it to list of batsman 
    if (batsmanArray.length != 0)
     {
        for (let j = 0; j < batsmanArray.length; j++) {
            if (batsmanArray[j].name === input[i].batsmanName) {

                bt = batsmanArray[j];
            }
            else {
                bt = undefined;

            }
        }

        if (bt == undefined) {
            bt = new Batsman(input[i].batsmanName);
            batsmanArray.push(bt);
        }
    }
    else {
        bt = new Batsman(input[i].batsmanName);
        batsmanArray.push(bt);
    }

    var bw: Bowler;
    //checking whether bowler exists or not. if not creates a bowler object and pushes it to list of bowler 
    if (bowlerArray.length != 0) {
        for (let k = 0; k < bowlerArray.length; k++) {
            if (bowlerArray[k].name === input[i].bowlerName) {

                bw = bowlerArray[k];
            }
            else {
                bw = undefined;

            }
        }

        if (bw == undefined) {
            bw = new Bowler(input[i].bowlerName);
            bowlerArray.push(bw);
        }
    }
    else {
        bw = new Bowler(input[i].bowlerName);
        bowlerArray.push(bw);
    }

    bt.runsScored += input[i].runsScored;//adding runs scored for each ball by respective batsman
    totalScore += input[i].runsScored;
    bw.runsGiven += input[i].runsScored;//adding runs given by bowler for each ball
    bw.ballsBowled.push(input[i].runsScored);//storing every ball score into balls bowled 
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
            bw.runsGiven += input[i].extraInfo.runsOffered;
            bw.ballsBowled.push(input[i].extraInfo.runsOffered);
        }
    }


}

function displayResult() {
    for (let i = 0; i < batsmanArray.length; i++) {
        console.log(batsmanArray[i].name);
        if (batsmanArray[i].notOut) {
            console.log("not out");
        }
        else if (batsmanArray[i].runout) {
            console.log("(run out)");
        } else {
            console.log("c " + batsmanArray[i].fielderName + "  b  " + batsmanArray[i].bowler);
        }
        console.log(batsmanArray[i].runsScored + "(" + batsmanArray[i].ballsFaced + ")");

    }
    let wickets: number = 0, balls: number = 0;
    for (let i = 0; i < bowlerArray.length; i++) {
        wickets += bowlerArray[i].wicketCount;
        balls += bowlerArray[i].ballsBowled.length;
    }
    balls /= 6;
    console.log(totalScore + "  for " + wickets + " in  " + balls + "   overs    RR(" + totalScore / balls + ")");
    console.log("bowler         O           M           R           W");
    for (let i = 0; i < bowlerArray.length; i++) {
        bowlerArray[i].moverCal();
        console.log(bowlerArray[i].name+"           "+bowlerArray[i].ballsBowled.length/6+"         "+bowlerArray[i].maidenOvers+"          "+bowlerArray[i].runsGiven+"            "+bowlerArray[i].wicketCount);

        
    }
}
displayResult();
})();
