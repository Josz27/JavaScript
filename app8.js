var obj= {
    greet: 'Hello'
}
console.log(obj.greet);
console.log(obj['greet']);
var prop='greet';
console.log(obj[prop]);
var arr =[];
//array de funciones
arr.push(function() {
    console.log('Hola');
});
arr.push(function() {
    console.log('Hola 2');
});

arr.push(function() {
    console.log('Hola 3');
});
arr.forEach(function(item){
    item();
});


