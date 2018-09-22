function multiplyDemo1(x, y) {
    return x * y;
}
var res1 = multiplyDemo1(10, 20);
console.log("Result 1 : " + res1);
var multiplyDemo2 = function (x, y) { return x * y; };
var res2 = multiplyDemo2(20, 30);
console.log("Result 2 : " + res2);
var Abc = /** @class */ (function () {
    function Abc() {
        this.name = "SunSoft";
    }
    Abc.prototype.display = function () {
        var xyz = this;
        setTimeout(function () {
            console.log(xyz.name);
        }, 3000);
    };
    return Abc;
}());
var a1 = new Abc();
a1.display();
var Xyz = /** @class */ (function () {
    function Xyz() {
        this.name = "SunSoft";
    }
    Xyz.prototype.display = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 3000);
    };
    return Xyz;
}());
var x1 = new Xyz();
x1.display();
