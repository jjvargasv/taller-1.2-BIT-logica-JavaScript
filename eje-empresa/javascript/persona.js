class Persona {
    // Atributos ( Variables )
   #id;         // # establece el atribito privado
   #nombre;
   #nacionalidad = 'colombia';
   #edad;
   #genero;

    constructor(id, nombre, edad, genero ) {
        this.#id=id;
        this.#nombre=nombre;
        this.#edad=edad;
        this.#genero=genero;

        
    }
}


    // instanciar un objeto de una clase (instanciar / crear)
    //const personaGuatavo = new Persona (8372827187, 'jhon', 'colombiano');
    //console.log(personaGuatavo);


class Empleado extends Persona {
    //atributos y o Propiedades
    #area;
    #cargo;
    #salario;
    #horario;
    #funciones=[];
    constructor( id, nombre, area, cargo, salario, horario,funciones ) {
      super(id, nombre, edad, genero);
      this.#cargo= cargo;
      this.#salario= salario;
      this.#horario= horario;
      this.#area= area;

    }

}


class Alumno extends Empleado {
    //atributos y o Propiedades (variables)
    
    #carrera;
    #semestre;
    #promocion;

    constructor(id, nombre, carrera,  semestre){
      super(id, nombre, edad, genero);
      this.#carrera= carrera;
      this.#semestre= semestre;

    } 
}

export {
   Alumno as Estudiante,
   Empleado
    
}

export default Persona