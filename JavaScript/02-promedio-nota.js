/* 

2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar). 

*/
let sum = 0;
for(let i=1; i<=3; i++){
    let not1 = Number(prompt('dijite su primera nota '));
         if(not1 => 0 && not1 <= 5){
        sum = sum + not1;
         }
        else{
            console.log('la nota debe ser en un rango de 0 a 5');
            document.write('la nota debe ser en un rango de 0 a 5');
            i = i -1;
        }
    
}
sum = sum / 3 ;
if(  3.4 <= sum){
    console.log('el alumno aprobo la matera con '+sum);
    document.write('el alumno aprobo la matera con '+sum );
}
else{
    console.log('el alumno reprobo la matera con ');
    document.write('el alumno reprobo la matera' );
    }
