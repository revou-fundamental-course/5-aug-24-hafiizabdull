function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    endResult()

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("height-alert").innerHTML = "Masukkan berat dan tinggi badan anda dengan benar.";
        return;
    }

    const meter = height / 10 / 10
    const bmi = weight / (meter * meter)

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    let tipe = "";

    if (bmi < 18.5) {
        tipe = "Anda Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        tipe = "Berat Badan Anda Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        tipe = "Anda Kelebihan Berat Badan";
    } else {
        tipe = "Anda Obesitas";
    }

    let hasilBMI = "";

    if (bmi >= 18 && bmi < 19) {
        hasilBMI = "17 dan 19";
    } else if (bmi >= 19 && bmi < 20) {
        hasilBMI = "18 dan 20";
    } else if (bmi >= 20 && bmi < 21) {
        hasilBMI = "19 dan 21";
    } else if (bmi >= 21 && bmi < 22) {
        hasilBMI = "20 dan 22";
    } else if (bmi >= 22 && bmi < 23) {
        hasilBMI = "21 dan 23";
    } else if (bmi >= 23 && bmi < 24) {
        hasilBMI = "22 dan 24";
    } else if (bmi >= 24 && bmi < 25) {
        hasilBMI = "23 dan 25";
    } else if (bmi >= 25 && bmi < 26) {
        hasilBMI = "24 dan 26";
    } else if (bmi >= 26 && bmi < 27) {
        hasilBMI = "25 dan 27";
    } else if (bmi >= 27 && bmi < 28) {
        hasilBMI = "26 dan 28";
    } else if (bmi >= 28 && bmi < 29) {
        hasilBMI = "27 dan 29";
    } else if (bmi >= 29 && bmi < 30) {
        hasilBMI = "28 dan 30";
    } else {
        hasilBMI = "29 dan 31";
    }

    let solution = "";

    if (bmi < 18.5) {
        solution = "Cara terbaik untuk meningkatkan berat badan adalah memberbanyak asupan kalori dengan memakan makanan yang bergizi dan berolahraga";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        solution = "Cara terbaik untuk menjaga berat badan tetap ideal adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
    } else if (bmi >= 25 && bmi < 29.9) {
        solution = "Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori makanan yang dikonsumsi dan berolahraga.";
    } else {
        solution = "Cara terbaik untuk menurunkan berat badan adalah dengan mengurangi asupan kalori makanan yang dikonsumsi dan berolahraga.";
    }

    let alert = "";

    if (bmi >= 25) {
        alert = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal."
    } else {
        null
    }




    document.getElementById("kategori").innerHTML = `${category}`
    document.getElementById("result").innerHTML = `${bmi.toFixed(2)}`
    document.getElementById("type").innerHTML = `${tipe}`

    document.getElementById("hasil-bmi").innerHTML = `Hasil BMI Diantara ${hasilBMI}.`
    document.getElementById("jenis").innerHTML = `Anda Berada Dalam Kategori ${category} atau ${tipe}.`
    document.getElementById("solusi").innerHTML = `${solution}`
    document.getElementById("alert").innerHTML = `${alert}`

}

const hasilAkhir = document.getElementById("hasil-akhir")

function endResult() {
    if (calculateBMI) {
        hasilAkhir.style.display = "block"
    } else {
        hasilAkhir.style.display = "none"
    }
}