import { Punto } from "./punto";
import { Triangulo } from "./triangulo";
export let punto:Punto = new Punto(10,-5)
export let puntoorigen:Punto = new Punto(0,0)
export let puntoorigen2:Punto = new Punto(10,10)
let otroPunto:Punto = new Punto(20,10)

let puntitos:Punto[] = [puntoorigen, puntoorigen2, otroPunto]

console.log(puntoorigen.toString());
console.log(puntoorigen.distanciaAlOrigen());
console.log(punto.calcularCuadrante());
console.log(punto.calcularDistancia(puntoorigen));
console.log(punto.calcularMasCercano(puntitos));


//TRIANGULO 

let punto1 = new Punto(4,3);
let punto2 = new Punto(7,5);
let punto3 = new Punto(9,2);

let trian = new Triangulo(punto1, punto2, punto3)
console.log(trian.calcularLongitudLados())


