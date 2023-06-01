/* 

1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).

*/

let not = prompt('dijite su nota');

if(  3.4 <= not){
    console.log('el alumno aprobo la matera con '+not);
    document.write('el alumno aprobo la matera con '+not );
}
else{
console.log('el alumno reprobo la matera ');
document.write('el alumno reprobo la matera' );
}