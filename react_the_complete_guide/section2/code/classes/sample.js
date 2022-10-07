class Human {
    constructor() {
      this.gender = 'Male';
    }
    
    printGender() {
      console.log(this.gender);
    }
}
  
class Person extends Human{
    // default
    constructor() {
        // must call super constructor in derived class
        super();
        this.name = "Pablo";
    }

    printMyName() {
        console.log(this.name);
    }
}
  
const person = new Person();
person.printMyName();
person.printGender();