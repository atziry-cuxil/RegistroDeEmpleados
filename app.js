let selectTipo = document.querySelector('#Tipo')
let inputNombre = document.querySelector('#nombre')
let inputEdad = document.querySelector('#edad')
let inputSalario = document.querySelector('#salario')
let inputDepartamento = document.querySelector('#departamento')
let btnAgregar = document.querySelector('#Agregar')
let contenedorListaEmpleados = document.querySelector('#contenedorPadre')
let form = document.querySelector('#form')
let empleadosRegistrados = [];

class Empleado {
    #nombre;
    #edad;
    #salario;

    constructor(nombre, edad, salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario
    }

    get nombre() {
        return this.#nombre
    }

    set nombre(value) {
        if (value.length != 0) {
            this.#nombre = value
        } else {
            throw new Error('Ingrese el nombre del empleado')
        }
    }

    get edad() {
        return this.#edad
    }

    set edad(value) {
        this.#edad = value
    }

    get salario() {
        return this.#salario
    }

    set salario(value) {
        this.#salario = value
    }

    mostrarInformacion() {
        return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.#nombre}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Edad: ${this.#edad}</li>
    <li class="list-group-item">salario: ${this.#salario}</li>
  </ul>
</div>`
    }

}

class Desarrollador extends Empleado {
    #lenguaje;

    constructor(nombre, edad, salario, lenguaje) {
        super(nombre, edad, salario)
        this.lenguaje = lenguaje
    }

    get lenguaje() {
        return this.#lenguaje
    }

    set lenguaje(value) {
        this.#lenguaje = value
    }

    mostrarInformacion() {
        return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.nombre}</h5>
    <h6> Desarrollador! </h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Edad: ${this.edad}</li>
    <li class="list-group-item">salario: ${this.salario}</li>
    <li class="list-group-item">Lenguaje: ${this.lenguaje}</li>
  </ul>
</div>`
    }

    calcularBono(){//10%

    }
}

class Gerente extends Empleado {
    #departamento;

    constructor(nombre, edad, salario, departamento) {
        super(nombre, edad, salario)
        this.departamento = departamento
    }

    get departamento() {
        return this.#departamento
    }

    set departamento(value) {
        this.#departamento = value
    }

    mostrarInformacion() {
        return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${this.nombre}</h5>
    <h6 > Gerente! </h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Edad: ${this.edad}</li>
    <li class="list-group-item">salario: ${this.salario}</li>
    <li class="list-group-item">Departamento: ${this.departamento}</li>
  </ul>
</div>`
    }

    calcularBono () {//20%

    }
}

btnAgregar.addEventListener('click', (event) => {
    let nuevoEmpleado;
    let nuevaCard;
    //Guardar los objetos en un arreglo
    //Imprimir los datos a traves del arreglo
    //Calcular bono
    //Mostrar salario final
    //cambios de columnas

    if (selectTipo.value == 'desarrollador') {
        nuevoEmpleado = new Desarrollador(inputNombre.value, inputEdad.value, inputSalario.value, inputDepartamento.value)
        //nuevaCard = nuevoEmpleado.mostrarInformacion()
        //bono de 20%
    } else if (selectTipo.value == 'lenguaje') {
        nuevoEmpleado = new Gerente(inputNombre.value, inputEdad.value, inputSalario.value, inputDepartamento.value)
        //nuevaCard = nuevoEmpleado.mostrarInformacion()
        //bono 10%
    } else {
        nuevoEmpleado = new Empleado(inputNombre.value, inputEdad.value, inputSalario.value)
        //nuevaCard = nuevoEmpleado.mostrarInformacion()
    }

    contenedorListaEmpleados.innerHTML += nuevaCard
    empleadosRegistrados.push(nuevoEmpleado)
    form.reset()
})

// for(let i = 0; i < nuevoEmpleado.length; i++){
//     nuevaCard += ``
//     nuevoEmpleado[i]
//}

//Se podria agregar un boton eliminar
