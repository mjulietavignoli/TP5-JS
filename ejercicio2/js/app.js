import { validarNombre, validarDni, validarSexo, validarPeso, validarAltura, validarAnioNacimiento } from './validaciones.js';
import { Persona } from './Persona.js';

const $form = document.getElementById("personaForm");
const $inputNombre = document.getElementById("nombre");
const $inputDni = document.getElementById("DNI");
const $inputSexo = document.getElementById("sexo");
const $inputPeso = document.getElementById("peso");
const $inputAltura = document.getElementById("altura");
const $inputAnioDeNacimiento = document.getElementById("anioNacimiento");
const $btnMostrarGeneracion = document.getElementById("btn-mostrarGeneracion");
const $btnEsMayor = document.getElementById("btn-esMayor");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
        alert('Por favor, revise los campos');
        return;
    }

    const nombre = $inputNombre.value;
    const dni = $inputDni.value;
    const sexo = $inputSexo.value;
    const peso = parseFloat($inputPeso.value);
    const altura = parseFloat($inputAltura.value);
    const anioDeNacimiento = parseInt($inputAnioDeNacimiento.value, 10);
    const edad = calcularEdad(anioDeNacimiento);

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento);
    persona.mostrarGeneracion();
    resetForm();
});

$btnEsMayor.addEventListener("click", () => {
    if (!validarFormulario()) {
        alert('Por favor, revise los campos');
        return;
    }

    const anioDeNacimiento = parseInt($inputAnioDeNacimiento.value, 10);
    const edad = calcularEdad(anioDeNacimiento);
    const persona = new Persona("", edad, "", "", 0, 0, anioDeNacimiento);
    persona.esMayorDeEdad();
    resetForm();
});

function validarFormulario() {
    return validarNombre($inputNombre) &&
           validarDni($inputDni) &&
           validarSexo($inputSexo) &&
           validarPeso($inputPeso) &&
           validarAltura($inputAltura) &&
           validarAnioNacimiento($inputAnioDeNacimiento);
}

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear();
    return anioActual - anioNacimiento;
}

function resetForm() {
    $inputNombre.classList.remove('is-valid', 'is-invalid');
    $inputDni.classList.remove('is-valid', 'is-invalid');
    $inputSexo.classList.remove('is-valid', 'is-invalid');
    $inputPeso.classList.remove('is-valid', 'is-invalid');
    $inputAltura.classList.remove('is-valid', 'is-invalid');
    $inputAnioDeNacimiento.classList.remove('is-valid', 'is-invalid');
    $form.reset();
}
