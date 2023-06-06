// Primitives:
// number, string, boolean

// TypeScript Primitives
let age: number;
let userName: string;
let isCondition: boolean;

// More Complex:
// arrays, objects

let hobbies: string[];
hobbies = ["Gaming", "Cooking"];

// default is "any" type
let basic:any;

// object typing (but not a class)
type Person = {
    name: string;
    age: number;
};

let person: Person;

// combine different types!
let people: Person[];

// Types Inference
let course = "React - The Complete Guide";
// cannot assign int afterwards
// course = 12341 fails

// Union Type - allows more than one type
let myVal: string | number = "React - The Complete Guide";

// Alias type
// type name: type_def;
function my_func(a:number, b:number) {
    return a + b;
};

// Functions and Types
// void - function never returns
function my_print(value: any) {
    console.log(value);
};

// Generics
function MyInsertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1,2,3];

const updatedArray = MyInsertAtBeginning(demoArray, -1); // [-1,1,2,3]

// would give runtime error!!
// need Generics
// updatedArray[0].split("");

// Template/Type
function MyInsertAtBeginningGeneric<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

// gives static time error instead :)
// updatedArray[0].split("");