function Greetr() {
    this.greeting= 'Hola Prro';
    this.greet= function() {
        console.log(this.greeting);
    }
}
module.exports=Greetr;