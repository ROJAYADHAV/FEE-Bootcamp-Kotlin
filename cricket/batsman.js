var batsman = /** @class */ (function () {
    function batsman(name) {
        this.name = name;
        this.runsScored = 0;
        this.ballsFaced = 0;
        this.notOut = false;
    }
    Object.defineProperty(batsman.prototype, "numberOfRuns", {
        get: function () {
            return this.runsScored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(batsman.prototype, "numberOfballsfaced", {
        get: function () {
            return this.ballsFaced;
        },
        enumerable: true,
        configurable: true
    });
    batsman.prototype.addRuns = function (run) {
        this.runsScored += run;
    };
    return batsman;
}());

