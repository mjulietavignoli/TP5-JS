const $btnIniciar = document.getElementById("btnIniciar");
const $btnResetear = document.getElementById("btnResetear");
const $btnPausar = document.getElementById("btnPausar");
const $tiempoId = document.getElementById("tiempoId");

$btnIniciar.addEventListener("click", iniciar);
$btnResetear.addEventListener("click", resetear);
$btnPausar.addEventListener("click", pausar);

let tiempoId;
let tiempo = 0;
let tiempoIdActivo = false;

function iniciar() {
    pausar();
    actualizarTiempo();
    tiempoIdActivo = true;
    tiempoId = setInterval(actualizarTiempo, 20);
}

function pausar() {
    clearInterval(tiempoId);
    tiempoIdActivo = false;
}

function resetear() {
    pausar();
    tiempo = 0;
    actualizarTiempo();
}

function actualizarTiempo() {
    const minutos = Math.floor(tiempo / 60000);
    const segundos = Math.floor((tiempo % 60000) / 1000);
    const milisegundos = tiempo % 1000;

    const formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
    const formatoSegundos = segundos < 10 ? "0" + segundos : segundos;
    const formatoMiliSegundos = milisegundos < 100 ? "0" + (milisegundos < 10 ? "0" + milisegundos : "0" + milisegundos) : milisegundos;

    $tiempoId.textContent = formatoMinutos + ":" + formatoSegundos + ":" + formatoMiliSegundos;
    
    tiempo += 20;
}