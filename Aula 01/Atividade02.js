class Calculadora{
    constructor(valor1, valor2){
        this.numUm = valor1;
        this.numDois = valor2;
    }
    soma(){
        const soma = (this.numUm + this.numDois);
        return "A soma é " + soma;
    };
    sub(){
        const sub = (this.numUm - this.numDois);
        return "A subtração é " + sub;
    };
    div(){
        const div = (this.numUm / this.numDois);
        return "A divisão é " + div;
    };
    mult(){
        const mult = (this.numUm * this.numDois);
        return "A multiplicação é " + mult;
    };
}
   
var calculo = new Calculadora(25, 2);

calculo.soma();
console.log(calculo.soma());
calculo.sub();
console.log(calculo.sub());
calculo.div();
console.log(calculo.div());
calculo.mult();
console.log(calculo.mult());