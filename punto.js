"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var formula = Math.sqrt(Math.pow((this.x), 2) + Math.pow((this.y), 2));
        return formula;
    };
    //
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));
    };
    Punto.prototype.calcularCuadrante = function () {
        if ((this.x == 0) && (this.y == 0)) {
            return 0;
        }
        if ((this.x > 0) && (this.y > 0)) {
            return 1;
        }
        if ((this.x < 0) && (this.y > 0)) {
            return 2;
        }
        if ((this.x < 0) && (this.y < 0)) {
            return 3;
        }
        if ((this.x > 0) && (this.y < 0)) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var valor = Number.MAX_VALUE;
        var cercano;
        for (var i = 0; i < puntos.length; i++) {
            //si el punto es mas pequeño que let cercano, let cercano pasa a hacer ese punto y de priemras que sea el max value y cuando mida todos el mas cercano tiene que ser el mas cercano y ese es el que tiene que devolver
            if (this.calcularDistancia(puntos[i]) < valor) {
                valor = this.calcularDistancia(puntos[i]);
                cercano = puntos[i];
            }
        }
        return cercano;
    };
    return Punto;
}());
exports.Punto = Punto;
// let punto:Punto = new Punto(10,-5)
// let puntoorigen:Punto = new Punto(0,0)
// let otroPunto:Punto = new Punto(20,10)
// let puntitos:Punto[] = [punto,puntoorigen, otroPunto]
// // console.log(punto.toString());
// // console.log(puntoorigen.distanciaAlOrigen());
// // console.log(punto.calcularCuadrante());
// // console.log(punto.calcularDistancia(otroPunto));
// console.log(punto.calcularMasCercano(puntitos));
// export let punto1:Punto = new Punto(10,-5)
// export let puntoorigen:Punto = new Punto(0,0)
// export let puntoorigen2:Punto = new Punto(10,10)
