var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        return _super.call(this, 'hyperdrive') || this;
    }
    MillenniumFalcon.prototype.jumpToHyperspace = function () {
        if (Math.random() > 0.5)
            _super.prototype.jumpToHyperspace.call(this); // chama o metodo da classe Spacecraft
        else
            console.log("Failed to jump to hyperspace"); // continua no metodo local
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpToHyperspace();
