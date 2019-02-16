var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpToHyperspace = function () {
        console.log("Entering in hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var shipClassExample = new Spacecraft('hyperdrive');
shipClassExample.jumpToHyperspace();
