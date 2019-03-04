function Greetr() {
    this.greeting= 'Hola Prro';
    this.greet= function() {
        console.log(this.greeting);
    }
}
//Exportando objeto completo
module.exports= new Greetr();