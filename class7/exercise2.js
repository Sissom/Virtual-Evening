
function parent(x) {
    function closure() {

    return x;
}

    return closure();
    }

const remember = parent("remembers me");

parent();

console.log(remember);