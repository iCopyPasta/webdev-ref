class Human {
    gender = 'Male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Pablo";
    gender = "Male";

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();