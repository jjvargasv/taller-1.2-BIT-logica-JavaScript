



export class Univercidad{
    //atributos
    #id;
    #nombre;
    #ciudad;
    #mienbros=[];
    
    
    constructor( id, ciudad, nombre){
        this.#id=id;
        this.#ciudad = ciudad ;
        this.#nombre = nombre;
    }

    // espera: Objetos de tipoestudiante y empleado 
    addMienbros(objeto){
        this.#mienbros.push(objeto)
    }

}

/* const empleadoAxel = new Empleado(123445, 'axel', 'colombiano','desarrollador', 3000);
console.log('empleado axel: ',empleadoAxel );

const estudiantebrayan = new Estudiante (12123213, 'brayan', 'colombiano', 'ing de sistemas' );
console.log(estudiantebrayan); */

/* const unal = new Univercidad (1, 'bogota ', 'univercidad nacional de colombia', );
unal.addMienbros(empleadoAxel);
unal.addMienbros(estudiantebrayan);

console.log( unal );
 */