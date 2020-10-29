import { Punto } from "./punto";


export class Triangulo {

    private element1:Punto
    private element2:Punto
    private element3:Punto
    
    constructor(element1:Punto, element2:Punto, element3:Punto)
    {
        this.element1 = element1
        this.element2 = element2;
        this.element3 = element3;


    }

    calcularLongitudLados():number[]
    {
        let arr1 = this.element1.calcularDistancia(this.element2);
        let arr2 = this.element1.calcularDistancia(this.element3);
        let arr3 = this.element3.calcularDistancia(this.element2);
        let longTotal = [arr1, arr2, arr3];

        return longTotal;
    }
    
}

// let punto1 = new Punto(4,3);
// let punto2 = new Punto(7,5);
// let punto3 = new Punto(9,2);

// let trian = new Triangulo(punto1, punto2, punto3)
// console.log(trian.calcularLongitudLados())