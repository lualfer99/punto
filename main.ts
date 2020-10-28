import { Punto } from "./punto";
let punto:Punto = new Punto(10,-5)
let puntoorigen:Punto = new Punto(0,0)
let puntoorigen2:Punto = new Punto(10,10)
let otroPunto:Punto = new Punto(20,10)

let puntitos:Punto[] = [puntoorigen, puntoorigen2, otroPunto]

console.log(puntoorigen.toString());
console.log(puntoorigen.distanciaAlOrigen());
console.log(punto.calcularCuadrante());
console.log(punto.calcularDistancia(puntoorigen));
console.log(punto.calcularMasCercano(puntitos));


