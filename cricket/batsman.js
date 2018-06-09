var batsman = /** @class */ (function () {
    function batsman(name) {
        this.name = name;
        this.runsScored = 0;
        this.ballsfaced = 0;
        this.notout = false;
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
            return this.ballsfaced;
        },
        enumerable: true,
        configurable: true
    });
    batsman.prototype.addRuns = function (run) {
        this.runsScored += run;
    };
    return batsman;
}());

