/* 4. Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes. */

const miArrMateria =[];
const alumno =[];




function perdirAlumno() {
    const nombre = prompt( 'Digita el nombre del alumno' ); 
    return nombre;
}

 function perdirMateria () {
    const materia = prompt( 'Digita una Materia' ); 
    return materia;
}


function notasMAteria(){
    const not = Number(prompt( 'Digita un nota' )); 
    return not;

}
 let objMateria; 
 
 objMateria= {
            nombreAlumno: '',
            nombre: '' ,    // nombre de materia
            notas: [], //Lista de Notas
            promedio: 0,
            aprobo:'',
        };
 let cuantosAlumnos =Number(prompt('Cuantos Alumnos deseas ingresar'));

for (let l=0;l<cuantosAlumnos;l++){
    const nuNombre = perdirAlumno();
    
    let cuantaMaterias =Number(prompt('Cuantas Materias deseas ingresar a ese alumno'));
    for( let i = 0; i < cuantaMaterias; i++ ) {
        let not=0;
        objMateria= {
            nombreAlumno: '',
            nombre: '' ,    // nombre de materia
            notas: [], //Lista de Notas
            promedio: 0,
            aprobo:'',
        };
        objMateria.nombreAlumno = nuNombre.trim();
        const nuevoNombre = perdirMateria();
        objMateria.nombre= nuevoNombre.trim();
        cuantaNotas =Number(prompt('Cuantas notas deseas ingresar'));
        for(let o = 0; o < cuantaNotas; o++){
            const nota = notasMAteria();
            objMateria.notas.push(nota)
            not=not+nota;
        }
        not = not/cuantaNotas;
        objMateria.promedio = not;

        if(  3.4 <= not){
        
            objMateria.aprobo ='aprobo';
        }
        else{
            
            objMateria.aprobo ='reprobo';
        }
        console.log( miArrMateria );

        miArrMateria.push(objMateria)
    
    }
}






