function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
}
const meter = height / 10 / 10
const bmi = weight / (meter * meter)

document.getElementById("result").innerHTML = `${bmi}`
