const salary = document.getElementById("salary");
const output = document.getElementById("salary-output");
output.innerHTML = salary.value;
salary.oninput = function () {
    output.innerHTML = this.value;
}

const text = document.querySelector('.input');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp(/^([\w]{3,})+\s+([\w\s]{3,})+$/);
    //Checking name correct or incorrect using if else condition
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else {
        textError.textContent = "Entered name is incorrect";
    }
});