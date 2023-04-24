function calculadora(num1, num2, operacion) {
    function suma(num1, num2){
        return num1 + num2;
    }
    
    function resta(num1, num2){
        return num1 - num2;
    }
    
    function multiplicacion(num1, num2){
        return num1 * num2;
    }
    
    function division(num1, num2){
        return num1 / num2;
    }
    switch (operacion) {
        case "+":
            return suma(num1,num2);
        case "-":
            return resta(num1,num2);
        case "*":
            return multiplicacion(num1,num2);
        case "/":
            if (num2 === 0) {
                return "No se puede dividir entre cero";
            } else {
                return division(num1,num2);
            }
        default:
            return "Operacion no encontrada";
    }
}

let salir = false;

while (!salir) {
    let numero1 = null;
    let numero2 = null;

    while (
        numero1 === null ||
        isNaN(numero1) ||
        numero1 === "" ||
        /^\s*$/.test(numero1)
    ) {
        numero1 = prompt(
            "Ingrese el primer número o presione la tecla 'Esc' para salir"
        );
        if (numero1 === null || numero1.toLowerCase() === "esc") {
            salir = true;
            break;
        }
    }

    if (salir) {
        break;
    }

    while (
        numero2 === null ||
        isNaN(numero2) ||
        numero2 === "" ||
        /^\s*$/.test(numero2)
    ) {
        numero2 = prompt(
            "Ingrese el segundo número o presione la tecla 'Esc' para salir"
        );
        if (numero2 === null || numero2.toLowerCase() === "esc") {
            salir = true;
            break;
        }
    }

    if (salir) {
        break;
    }

    let operacion = prompt(
        "Ingrese la operación (+, -, *, /) o presione la tecla 'Esc' para salir"
    );

    if (operacion === null || operacion.toLowerCase() === "esc") {
        salir = true;
        break;
    }

    let resultado = calculadora(+numero1, +numero2, operacion);
    if (isNaN(resultado)) {
        alert("Ingrese valores válidos");
    } else {
        alert(`El resultado es ${resultado}`);
    }
}

if (salir) {
    alert("Saliendo de la calculadora");
}
