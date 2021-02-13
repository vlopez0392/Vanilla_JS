// ES6 Subclasses 

//Parent Person Class
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

// Child Customer Class
class Customer extends Person{
    constructor(firstName, lastName, dob, phone, membership){
        super(firstName, lastName, dob); //Calls the parent class Person constructor
        
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer("John", "Doe", "1992-01-01", "555-555-5555", "Standard");
console.log(john);
console.log(Customer.getMembershipCost());