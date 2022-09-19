// primitives: number, string, boolean
// more complex types: arrays, objects
// furnction types, parameters

//primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// more complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// function & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
};

// generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

class Student {
    public firstName: string;
    public lastName: string;
    public age: number;
    private courses: string[];

    constructor(public first: string, public last: string, public age: number, privatecourses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enrol(coursName: string) {
        this.courses.push(coursName);
    }
    
    listcourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.listcourses(); => Angular, React

// student.courses => Angular, React

// interfaces

interface Human {
    firstName: string;
    age: number;
    
    greet: () => void;
};

    let max: Human;
    max = {
        firstName: 'Max',
        age: 32,
        greet() {
            console.log('Hello!');
        }
    };

    class Instructor implements Human {
        firstName: string;
        age: number;
        greet() {
            console.log('Hello!!!!');
        }
    };