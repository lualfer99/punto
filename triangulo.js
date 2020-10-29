"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(element1, element2, element3) {
        this.element1 = element1;
        this.element2 = element2;
        this.element3 = element3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var arr1 = this.element1.calcularDistancia(this.element2);
        var arr2 = this.element1.calcularDistancia(this.element3);
        var arr3 = this.element3.calcularDistancia(this.element2);
        var sumaTotal = [arr1, arr2, arr3];
        return sumaTotal;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
// let punto1 = new Punto(4,3);
// let punto2 = new Punto(7,5);
// let punto3 = new Punto(9,2);
// let trian = new Triangulo(punto1, punto2, punto3)
// console.log(trian.calcularLongitudLados())
