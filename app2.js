var person= {
    firstname: 'Luis',
    lastname: 'Gutierrez',
    greet: function(){
        console.log('Hello,' +this.firstname+ ' '+ this.lastname);
    }
};
person.greet();
console.log(person['firstname']);