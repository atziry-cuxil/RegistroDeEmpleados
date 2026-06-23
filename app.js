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
        return {nombre: this.#nombre, edad: this.#salario, salario: this.#salario}
    }

}

class Desarrollador extends Empleado {
    #lenguaje;
    #salarioFinal;

    constructor(nombre, edad, salario, lenguaje) {
        super(nombre, edad, salario)
        this.lenguaje = lenguaje
        this.#salarioFinal = this.salario + this.calcularBono()
    }

    get lenguaje() {
        return this.#lenguaje
    }

    set lenguaje(value) {
        this.#lenguaje = value
    }
     
    get salarioFinal(){
        return this.#salarioFinal
    }

    mostrarInformacion() {
        return {nombre: this.nombre, edad: this.edad, salario: this.salario, salarioFinal: this.#salarioFinal, lenguaje: this.#lenguaje}

    }

    calcularBono() {//10%
        return (this.salario * 10) / 100
    }

}

class Gerente extends Empleado {
    #departamento;
    #salarioFinal;

    constructor(nombre, edad, salario, departamento) {
        super(nombre, edad, salario)
        this.departamento = departamento
        this.#salarioFinal = this.salario + this.calcularBono()
    }

    get departamento() {
        return this.#departamento
    }

    set departamento(value) {
        this.#departamento = value
    }

    get salarioFinal (){
        return this.#salarioFinal
    }

    mostrarInformacion() {
        return {nombre: this.nombre, edad: this.edad, salario: this.salario, salarioFinal: this.#salarioFinal, departamento: this.#departamento}

    }

    calcularBono() {//20%
        return (this.salario * 20) / 100
    }
}

let nuevoEmpleado;
let nuevaCard;

btnAgregar.addEventListener('click', (event) => {

    if (selectTipo.value == 'desarrollador') {
        nuevoEmpleado = new Desarrollador(inputNombre.value, inputEdad.value, parseInt(inputSalario.value), inputDepartamento.value)
    } else if (selectTipo.value == 'lenguaje') {
        nuevoEmpleado = new Gerente(inputNombre.value, inputEdad.value, parseInt(inputSalario.value), inputDepartamento.value)
    } else {
        nuevoEmpleado = new Empleado(inputNombre.value, inputEdad.value, inputSalario.value)
    }

    empleadosRegistrados.push(nuevoEmpleado)
    form.reset()
    renderizar()
})

function renderizar() {
    contenedorListaEmpleados.innerHTML = ""
    nuevaCard = ''
    for (let i = 0; i < empleadosRegistrados.length; i++) {
        if (empleadosRegistrados[i].lenguaje != undefined) {
            nuevaCard += `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${empleadosRegistrados[i].nombre}</h5>
        <h6> Desarrollador! </h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Edad: ${empleadosRegistrados[i].edad}</li>
        <li class="list-group-item">salario: ${empleadosRegistrados[i].salario}</li>
        <li class="list-group-item">Lenguaje: ${empleadosRegistrados[i].lenguaje}</li>
        <li class="list-group-item">salarioFinal: ${empleadosRegistrados[i].salarioFinal}</li>
    </ul>
    </div>`
        } else {
            nuevaCard += `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${empleadosRegistrados[i].nombre}</h5>
        <h6> Gerente! </h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Edad: ${empleadosRegistrados[i].edad}</li>
        <li class="list-group-item">salario: ${empleadosRegistrados[i].salario}</li>
        <li class="list-group-item">Departamento: ${empleadosRegistrados[i].departamento}</li>
        <li class="list-group-item">salarioFinal: ${empleadosRegistrados[i].salarioFinal}</li>
    </ul>
    </div>`
        }
    }
    contenedorListaEmpleados.innerHTML = nuevaCard
}

//Se podria agregar un boton eliminar
