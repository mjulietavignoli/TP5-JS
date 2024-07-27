export function validarNombre($field) {
    if (!$field || !$field.value.trim()) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }

    if ($field.value.trim().length < 3 || $field.value.trim().length > 25) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }

    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
    if (!regex.test($field.value)) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }

    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarEdad($field) {
    const edad = parseInt($field.value.trim(), 10);
    if (!Number.isInteger(edad) || edad <= 0 || edad >= 150) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarDni($field) {
    const dni = $field.value.trim();
    if (!/^\d{8,10}$/.test(dni)) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarSexo($field) {
    const sexo = $field.value.trim();
    if (sexo !== 'H' && sexo !== 'M') {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarPeso($field) {
    const peso = parseFloat($field.value.trim());
    if (isNaN(peso) || peso <= 0) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarAltura($field) {
    const altura = parseFloat($field.value.trim());
    if (isNaN(altura) || altura <= 0) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}

export function validarAnioNacimiento($field) {
    const anioDeNacimiento = parseInt($field.value.trim(), 10);
    const anioActual = new Date().getFullYear();
    if (!Number.isInteger(anioDeNacimiento) || anioDeNacimiento < 1900 || anioDeNacimiento > anioActual) {
        $field.classList.add('is-invalid');
        $field.classList.remove('is-valid');
        return false;
    }
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
}
