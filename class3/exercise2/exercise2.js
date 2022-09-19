function getInfo(user) {
    const person = {
        name: "Tiger Woods",
        age: 46,
        job: "PGA Golfer"
    }
    
    if (person.name == user) {
        console.log(`${person.name} is ${person.age} and is a ${person.job}.`)
    }
};