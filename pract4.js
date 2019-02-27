function change(b) {
    b=7;
}
var a=1;
change(a);
console.log(a);
function changeObj(d) {
    d.prop1 = function() {}
    d.prop2={};
}
// por referencia
var c= {};
c.prop1 = {};
changeObj(c);
console.log(c);