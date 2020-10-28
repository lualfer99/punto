export class Punto {
    private x:number;
    private y:number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;

    }

    toString():string
    {
        return "(" + this.x + "," + this.y +")" ;
    }

    getX():number
    {
        return this.x;
    }
    
    setX(x:number)
    {
        this.x = x;
    }

    getY():number
    {
        return this.y;
    }

    setY(y:number)
    {
        this.y = y;
    }

    distanciaAlOrigen():number
    {
        let formula = Math.sqrt(Math.pow((this.x),2) + Math.pow((this.y),2));
        return formula

    }

//
    calcularDistancia(otroPunto:Punto):number
    {

        return Math.sqrt(Math.pow((this.x - otroPunto.x),2) + Math.pow((this.y - otroPunto.y),2));


    }

    calcularCuadrante():number
    {

        if ((this.x == 0)&&(this.y == 0)) {
            return 0;
        } 
        if ((this.x>0)&&(this.y>0)) {
            return 1;
        } 
        if ((this.x < 0)&&(this.y > 0)) {
            return 2;
        } 
        if ((this.x < 0)&&(this.y < 0)) {
            return 3;
        } 
        if ((this.x > 0)&&(this.y < 0)) {
            return 4;
        } 
    }

    calcularMasCercano(puntos: Punto[]):Punto
    {
        let valor:number = Number.MAX_VALUE;
        let cercano:Punto;

        
        for(let i=0;i<puntos.length;i++){

            //si el punto es mas pequeño que let cercano, let cercano pasa a hacer ese punto y de priemras que sea el max value y cuando mida todos el mas cercano tiene que ser el mas cercano y ese es el que tiene que devolver
            if(this.calcularDistancia(puntos[i]) < valor){
                valor = this.calcularDistancia(puntos[i]);
                cercano = puntos[i]

            }
        }
        return  cercano
        
        
    }

}

// let punto:Punto = new Punto(10,-5)
// let puntoorigen:Punto = new Punto(0,0)
// let otroPunto:Punto = new Punto(20,10)

// let puntitos:Punto[] = [punto,puntoorigen, otroPunto]

// // console.log(punto.toString());
// // console.log(puntoorigen.distanciaAlOrigen());
// // console.log(punto.calcularCuadrante());
// // console.log(punto.calcularDistancia(otroPunto));
// console.log(punto.calcularMasCercano(puntitos));

