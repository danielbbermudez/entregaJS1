alert("Bienvenidos a Mediasalary");
const usuarioAutorizado = "Daniel";
const contraseniaAutorizada = "1234";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

if (usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);


    let cantidadEmpleados = parseInt(prompt("Ingrese la cantidad de empleados a calcular"));

    for(let i = 0;i< cantidadEmpleados; i++) {
        let nombreEmpleado = prompt("Ingrese el nombre del empleado");
        let salarioPrimerCuatrimestre = parseInt(prompt("Ingrese el salario de " + nombreEmpleado + " en el primer Cuatrimestre."));
        let salarioSegundoCuatrimestre = parseInt(prompt("Ingrese el salario de " + nombreEmpleado + " en el segundo Cuatrimestre."));
        let salarioTercerCuatrimestre = parseInt(prompt("Ingrese el salario de " + nombreEmpleado + " en el tercer Cuatrimestre."));
        let promedio = calcularPromedio(salarioPrimerCuatrimestre,salarioSegundoCuatrimestre,salarioTercerCuatrimestre);
        alert("El promedio salarial de " + nombreEmpleado + " este año es de " + promedio.toFixed(2));

        let trabaja = trabajador(promedio);

        if(trabaja) {
            alert(nombreEmpleado + " es un gran trabajador");
    } else {
        alert(nombreEmpleado + " necesita trabajar más");
    }
}  
} else {
    alert("Usuario o contraseña incorrecta");
}

function calcularPromedio(facturaLuz,facturaGas,facturaInternet){
    let promedio = (facturaLuz + facturaGas + facturaInternet)/3;
    return promedio;
}

function trabajador(promedio) {
    if(promedio >= 22000) {
        return true;
    } else {
        return false;
    }
}