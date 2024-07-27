export class Tarea {
    static currentId = 0;
    constructor(descripcion) {
        this.id = ++Tarea.currentId;
        this.descripcion = descripcion;
    }
}