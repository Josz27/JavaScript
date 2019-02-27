var firstname= 'Jane';
(function (lastname) {
    var firstname='John';
    console.log(firstname)
    console.log(lastname)

}('Doe')); // primeros parentesis para indicar que ya no es una funcion normal, que es una expresion
// los () para indicar que se va a ejecutar
console.log(firstname);