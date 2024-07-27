export class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
    mostrarGeneracion() {
        let generacion;
        let rasgoCaracteristico;
    
        const anioNacimiento = this.anioNacimiento;
        if(anioNacimiento>=1930 && anioNacimiento<=1948) {
          generacion = 'Silent Generation'
          rasgoCaracteristico = 'Conflictos bélicos';
        }
        else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
          generacion = 'Baby Boom';
          rasgoCaracteristico = 'Paz y explosión demográfica';
        } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
          generacion = 'Generación X';
          rasgoCaracteristico = 'Crisis del 73 y transición española';
        } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
          generacion = 'Generación Y, Millenials';
          rasgoCaracteristico = 'Inicio de la digitalización';
        } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
          generacion = 'Generación Z';
          rasgoCaracteristico = 'Expansión masiva de internet';
        } else {
          generacion = 'Desconocida';
          rasgoCaracteristico = 'No hay información disponible para esta generación.';
        }
    
        alert(`Generación: ${generacion}\nRasgo característico: ${rasgoCaracteristico}`);
      }
    
      esMayorDeEdad() {
        const edad = this.edad;
        if (edad >= 18) {
          alert('La persona es mayor de edad.');
        } else {
          alert('La persona es menor de edad.');
        }
      }
    }
