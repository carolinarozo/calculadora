document.getElementById("btnSumar").addEventListener("click", function (e) {
    e.preventDefault();
    var inputA = document.getElementById("numeroA").value;
    var inputB = document.getElementById("numeroB").value;
    var resultado = 0
    var labelelement = document.getElementById("resultado")


    if (inputA == "" || inputB == "") {
        alert("Debe rellenar los datos para realizar la operación");
    } else {
        inputA = parseFloat(inputA);
        inputB = parseFloat(inputB);

        resultado = inputA + inputB;
        labelelement.innerHTML = resultado;
        console.log(resultado);


    }


})

document.getElementById("btnMultiplicar").addEventListener("click", function (e) {
    e.preventDefault();
    var inputA = document.getElementById("numeroA").value;
    var inputB = document.getElementById("numeroB").value;
    var resultado = 0
    var labelelement = document.getElementById("resultado")


    if (inputA == "" || inputB == "") {
        alert("Debe rellenar los datos para realizar la operación");
    } else {
        inputA = parseFloat(inputA);
        inputB = parseFloat(inputB);

        resultado = inputA * inputB;
        labelelement.innerHTML = resultado;
        console.log(resultado);


    }


})


document.getElementById("btnRestar").addEventListener("click", function (e) {
    e.preventDefault();
    var inputA = document.getElementById("numeroA").value;
    var inputB = document.getElementById("numeroB").value;
    var resultado = 0
    var labelelement = document.getElementById("resultado")


    if (inputA == "" || inputB == "") {
        alert("Debe rellenar los datos para realizar la operación");
    } else {
        inputA = parseFloat(inputA);
        inputB = parseFloat(inputB);

        resultado = inputA - inputB;
        labelelement.innerHTML = resultado;
        console.log(resultado);


    }


})

document.getElementById("btnDividir").addEventListener("click", function (e) {
    e.preventDefault();
    var inputA = document.getElementById("numeroA").value;
    var inputB = document.getElementById("numeroB").value;
    var resultado = 0
    var labelelement = document.getElementById("resultado")


    if (inputA == "" || inputB == "") {
        alert("Debe rellenar los datos para realizar la operación");
    } else {
        inputA = parseFloat(inputA);
        inputB = parseFloat(inputB);

        resultado = inputA / inputB;
        labelelement.innerHTML = resultado;
        console.log(resultado);


    }


})