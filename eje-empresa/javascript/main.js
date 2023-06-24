
import Persona, { Alumno , Empleado } from './persona.js';
import { Univercidad } from "./univercidad.js";


const unalBog = new Univercidad (1, 'bogota ', 'univercidad nacional de colombia', );

const unalMed = new Univercidad (2, 'Medellin ', 'univercidad nacional de colombia');

unalBog.addMienbros( new Alumno (1,'nicolas','masculino',18,'ing de sistemas',));
unalBog.addMienbros( new Alumno (2,'accel','masculino',21,'ing de sistemas',3));
unalBog.addMienbros( new Alumno (3,'maria','femenino',27,'ing de sistemas',2));
unalBog.addMienbros( new Empleado (1231321,'bairon','masculino',35,'director area',3000));
unalBog.addMienbros( new Alumno (4,'Ana Maria','femenino',27,'ing de sistemas',2));