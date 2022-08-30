function saveInfo () {
    let firstName = document.getElementById("firstname");
    localStorage.setItem("First Name:", firstName.value);

    let lastName = document.getElementById("lastname");
    localStorage.setItem("Last Name:", lastName.value);

    let userAge = document.getElementById("age");
    localStorage.setItem("Age:", userAge.value);

    let userDegree = document.getElementById("degree");
    localStorage.setItem("Degree:", userDegree.value);
}