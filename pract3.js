function Person(firstname, lastname){
    this.firstname= firstname;
    this.lastname= lastname;
}

Person.prototype.greet=function(){
    console.log('Hi '+this.firstname+ ' '+ this.lastname);
};
var jane=new Person('jane', 'Doe');
jane.greet();
var john=new Person('John', 'Doe');
john.greet();
console.log(jane._proto_);
console.log(john._proto_);
console.log(john._proto_ === jane._proto_);


