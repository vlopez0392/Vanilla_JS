// ES6 Classes - Syntactic sugar for ES5 Classes
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.birthday  = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);    
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }

    //Static methods - Methods that do not require object instantiation (Basically standalone methods)
    static printDate(){
        const today = new Date();
        console.log(today);
    }
}

const vick = new Person("Vick", "Lopez", '1992-03-10');
console.log(vick.calculateAge());
vick.getsMarried("Mejia");

console.log(vick.greeting());
Person.printDate();