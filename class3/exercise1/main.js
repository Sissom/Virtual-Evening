
const userInfo = {
    name: "Matt",
    level: "Novice",
    introduce: function () {
     return `My name is ${this.name}.`;
    },
    motivate: function(whatIsYourLevel) {
        return ` My level is ${whatIsYourLevel}.`;
    }
};

const coderStatus = userInfo.introduce() + userInfo.motivate(userInfo.level);
console.log("Coder Status", coderStatus);