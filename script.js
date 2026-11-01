//your JS code here. If required.

let form = document.getElementById("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    // Validate inputs
    if (age === "" || name.trim() === "") {
        alert("Please enter valid details.");
        return;
    }

    // Create Promise
    let promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Number(age) > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }

        }, 4000);

    });

    // Handle Promise
    promise
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });

});
