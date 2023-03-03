/*
//class 32(2)No. video
const users = [
    {id: 1, name: 'abul', job: 'doctor'}

]
const user = {
    count: 4000,
    date: {
        co: 200, 
        dat:{
            counte: 100,
            da: [
                {id: 1}, {id: 2}, {id:3}
            ]
        }
    }
}

console.log(user.date.dat.da[1].id);
console.log(users[0].name);

//class 32(3)No.Video
const numbers = [2, 8, 4, 6, 3];
const double = num => num * 2;
const makeDouble = numbers.map(double);

console.log(makeDouble);



//class 32(4)No. Video
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetters = friends.map(f => f[4]);
console.log(firstLetters);

const products = [
    {id: 1, name: 'mobaile', price: 6000},
    {id: 2, name: 'watch', price: 500}
];
const co = p => p.id;
const product = products.map(co);
console.log(product);

//Class 32(5)No. Video 
const numbers = [13, 5, 23, 45, 11, 19, 9, 55, 61, 1];
const bigNum = n => n%2 === 0;
const bigNums = numbers.find(bigNum);
console.log(bigNums);

//Class 32(7)No. Video
class Instructor {
    name;
    designation = 'Instructor';
    team = "Web team";
    location;
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
    constructor(nam, location, time){
        this.name = nam;
        this.location = location;
    }
}
const amir = new Instructor('amir', 'mombai');
const solaiman = new Instructor('solaiman', 'Dhaka');
console.log(amir);
amir.startSupportSession('9.00');
console.log(solaiman);
*/

//Class 32(8)No. Video
/*
class Developer {
    name;
    designation = 'Instructor';
    team = "Web team";
    location;
    tech;
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
    constructor(nam, location, tech){
        this.name = nam;
        this.location = location;
        this.tech = tech;
    }
    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback`);
    }
}
const h = new Developer ()

//sumit class
class Car {
    constructor(name, year){
        this.name = name;
        this.y = year;
    }
    run(parameter){
        console.log(this.name + ' is running ' + parameter);
    }
}
const bmw = new Car('bmw', 2022);
bmw.run(100 + ' km / h' )
*/
