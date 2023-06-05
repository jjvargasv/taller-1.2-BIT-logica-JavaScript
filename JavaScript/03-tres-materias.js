/* 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó. */

/* let mate1 = 0;
let mate2 = 0;
let mate3 = 0;
let nom = prompt('dijite el nmbre del alumno ');

for(let i=1; i<=3; i++){
    let matem1 = Number(prompt('dijite nota de matematicas '));
    mate1 = mate1 + matem1;
}
for(let i=1; i<=3; i++){
    let espa = Number(prompt('dijite nota de español '));
    mate2 = mate2 + espa;
}
for(let i=1; i<=3; i++){
    let prog = Number(prompt('dijite nota de programacion '));
    mate3 = mate3 + prog;
}
mate1 = mate1 / 3 ;
mate2 = mate2 / 3 ;
mate3 = mate3 / 3 ;

if(  3.4 <= mate1){
    console.log('el alumno aprobo la materia  matematicas con '+mate1);
    document.write('el alumno aprobo la materia matematicas con '+mate1, '</br>' );
}
else{
    console.log('el alumno reprobo la mateir amatematicas con ');
    document.write('el alumno reprobo la materia matematicas', '</br>');
}

if(  3.4 <= mate2){
    console.log('el alumno aprobo la materia  español con '+mate2);
    document.write('el alumno aprobo la materia español con '+mate2, '</br>' );
}
else{
    console.log('el alumno reprobo la mateir español con ');
    document.write('el alumno reprobo la materia español', '</br>' );
}

if(  3.4 <= mate3){
    console.log('el alumno aprobo la materia  programacion con '+mate3);
    document.write('el alumno aprobo la materia programacion con '+mate3, '</br>' );
}
else{
    console.log('el alumno reprobo la mateir programacion con ');
    document.write('el alumno reprobo la materia programacion', '</br>' );
}
 */


let mate1 = 0;


let nom = prompt('dijite el nmbre del alumno ');
for(let i=1; i<=3; i++){
    let materia1 = prompt('dijite el nombre de la materia del alumno ');
    for(let i=1; i<=3; i++){
        let notas = Number(prompt('dijite nota de  '));
        mate1 = mate1 + notas;
    }
    mate1 = mate1 / 3 ;

    if(  3.4 <= mate1){
        console.log('el alumno aprobo la materia  '+materia1,' con '+mate1);
        document.write('el alumno aprobo la materia '+materia1,' con '+mate1, '</br>' );
    }
    else{
        console.log('el alumno reprobo la mateir '+materia1,' con ');
        document.write('el alumno reprobo la materia '+materia1,'', '</br>');
    }

}