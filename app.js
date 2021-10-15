/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
  {
    nombre: "Juan",
    carrera: "Biología",
    nota: 16,
  },
  {
    nombre: "Jose",
    carrera: "Enfermero",
    nota: 10,
  },
  {
    nombre: "Luis",
    carrera: "Policía",
    nota: 07,
  },
  {
    nombre: "Maria",
    carrera: "Secretariado",
    nota: 10,
  },
  {
    nombre: "Hugo",
    carrera: "Enfermero",
    nota: 15,
  },
  {
    nombre: "Rosa",
    carrera: "Enfermero",
    nota: 12,
  },
  {
    nombre: "Luisa",
    carrera: "Biología",
    nota: 18,
  },
];

let aprobados = 0,
  desaprobados = 0,
  NotasApro = 0,
  NotasDesapro = 0;

alumnos.forEach((alumno, i) => {
  const { nota, carrera, nombre } = alumno;
  if (nota >= 13) {
    aprobados++;
    NotasApro += nota;
  } else {
    desaprobados++;
    NotasDesapro += nota;
  }

  if (i % 2 === 0) {
    console.log(`Mi nombre es ${nombre} y mi carrera es ${carrera}`);
  }
});

console.log(`Aprobados: ${aprobados} - Desaprobados ${desaprobados}`);
console.log(`Promedio aprobados: ${NotasApro / aprobados}`);
console.log(`Promedio desaprobados: ${NotasDesapro / desaprobados}`);

console.log(alumnos.filter((alumno) => alumno.nota < 13));
console.log(alumnos.map((alumno) => (alumno.nota * 3) / 2));
