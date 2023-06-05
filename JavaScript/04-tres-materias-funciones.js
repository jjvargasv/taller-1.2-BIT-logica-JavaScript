/* 4. Implementar funciones para realizar la misma funcionalidad del punto 3, pero calculando las notas de tres estudiantes. */

const miArrMateria =[];

let not=0;
let nom = prompt('dijite el nombre del alumno ');
let cuantaMaterias =Number(prompt('Cuantas Materias deseas ingresar'));



 function perdirMateria () {
    const materia = prompt( 'Digita un Materia' ); 
    return materia;
}


function notasMAteria(){
    const not = Number(prompt( 'Digita un nota' )); 
    return not;

}
 let objDev; 

for( let i = 0; i < cuantaMaterias; i++ ) {
    objDev= {
        nombre: '' ,    // nombre de materia
        notas: [], //Lista de Notas
        promedio: 0,
        aprobo:'',
    };

    const nuevoNombre = perdirMateria();
    objDev.nombre= nuevoNombre.trim();
    cuantaNotas =Number(prompt('Cuantas notas deseas ingresar'));
    for(let o = 0; o < cuantaNotas; o++){
        const nota = notasMAteria();
        objDev.notas.push(nota)
        not=not+nota;
    }
    not = not/cuantaNotas;
    objDev.promedio = not;

     if(  3.4 <= not){
       
        objDev.aprobo ='aprobo';
    }
    else{
        
        objDev.aprobo =' reprobo';
    }
    console.log( miArrMateria );
    miArrMateria.push(objDev)
 
}





document.write(objDev);

