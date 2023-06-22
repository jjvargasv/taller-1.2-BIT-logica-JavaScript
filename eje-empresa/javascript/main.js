//{}

//{} de tipo persona
class Persona {
    // Atributos ( Variables )
   #id;         // # establece el atribito privado
   #nombre;
   #nacionalidad;

    constructor(id, nombre, nacionalidad) {
        this.#id=id
        this.#nombre=nombre
        this.#nacionalidad=nacionalidad
    }
}
class Empleado extends Persona {
      //atributos y o Propiedades
      #area;
      #cargo;
      #salario;
      #horario;
      #funciones=[];
      constructor( id, nombre, nacionalidad,area, cargo, salario, horario,funciones ) {
        super(id,nombre,nacionalidad);
        this.#cargo= cargo;
        this.#salario= salario;
        this.#horario= horario;
        this.#area= area;

      }
  
}

class Universitario extends Empleado {
      //atributos y o Propiedades (variables)
      
      #carrera;
      #univercidad;
      #semestre

      constructor(id, nombre, nacionalidad, cargo, salario, carrera, univercidad, semestre){
        super(id,nombre,nacionalidad,cargo,salario);
        this.#carrera= carrera;
        this.#univercidad= univercidad;
        this.#semestre= semestre;

      } 


  
}

    // instanciar un objeto de una clase (instanciar / crear)
    const personaGuatavo = new Persona (8372827187, 'jhon', 'colombiano');
    console.log(personaGuatavo);

    const empleadoAxel = new Empleado(123445, 'axel', 'colombiano','desarrollador', 3000);
    console.log('empleado axel: ',empleadoAxel );

