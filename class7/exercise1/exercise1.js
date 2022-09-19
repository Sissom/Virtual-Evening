function redundantReturn(str) {
    return function(name) {
        return `${name} ${str}`
    }
};

let welcomeMessage = redundantReturn(", welcome!");

console.log("Message: ", welcomeMessage("Matt"));
