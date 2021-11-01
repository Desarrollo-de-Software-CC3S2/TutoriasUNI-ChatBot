const datos_p = {
    Nombre:"Luis",
    Edad:22,
    Correo:"luis.seminario.s@uni.pe",
    Cursos:[
        {
            Curso:"Matematica",
            Nombre:"Ecuaciones Diferenciales",
            Profesor:"Luigui"
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Financiera",
            Profesor:"Osbaldo"
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Discreta",
            Profesor:"Luigui"
        },
        {
            Curso:"Matematica",
            Nombre:"Trigonometria",
            Profesor:"Luinguini"
        },
        {
            Curso:"Fisica",
            Nombre:"Choques Amortiguados",
            Profesor:"Pedrinchi"
        },
        {
            Curso:"Computacion",
            Nombre:"Programacion Algebraica",
            Profesor:"Peter"
        }
    ]

};


const data = [
        {
            Curso:"Matematica",
            Nombre:"Ecuaciones Diferenciales",
            Profesor:"Luigui"
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Financiera",
            Profesor:"Osbaldo"
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Discreta",
            Profesor:"Luigui"
        },
        {
            Curso:"Matematica",
            Nombre:"Trigonometria",
            Profesor:"Luinguini"
        },
        {
            Curso:"Fisica",
            Nombre:"Choques Amortiguados",
            Profesor:"Pedrinchi"
        },
        {
            Curso:"Computacion",
            Nombre:"Programacion Algebraica",
            Profesor:"Peter"
        },
        {
            Curso:"Quimica",
            Nombre:"Quimica 1",
            Profesor:"Rosa"
        },
        {
            Curso:"Computacion",
            Nombre:"Programacion Dinamica",
            Profesor:"Yuri"
        },
        {
            Curso:"Matematica",
            Nombre:"Teoria de numeros primos",
            Profesor:"Luigui"
        },
        {
            Curso:"Computacion",
            Nombre:"Desarrollo de Software",
            Profesor:"Ciro"
        },
        {
            Curso:"Quimica",
            Nombre:"Quimica Farmaceutica",
            Profesor:"Tevez"
        },
    ];

//------------------------------------------------------

var cadena = "mostrar todos los nombres de los profesores que enseñan el curso de fisica";
var llevar = RegExp("llevo|llevando|me enseña");
var estoy = RegExp("estoy matriculado|estoy matriculada");
var cursos = RegExp("cursos");

// cursos:
var math = /matematica/;
var fisica = /fisica/;
var quimica =/quimica/;
var computacion = /computacion/;

// nombre 
var nombre = RegExp("nombre|nombres");
var profesor = RegExp("profesor|docente|tutor");
var profesores = RegExp("profesores|docentes|tutores");

// preguntas
var cual = RegExp("cual|cuales");
var que = RegExp("que");

// datos personales
var edad = RegExp("edad|años");
var nombremio = RegExp("mi nombre|cómo me llamo");
var mi = RegExp("mis|mi");

var alumno = RegExp("Alumnos|Estudiantes");
var m =0;
// complemento
var mostrar_dar = RegExp("mostrar|muestrame|dar|dame");
var buscador = RegExp("buscador");
var ayuda = RegExp("help|ayuda");
var curso = RegExp("curso|area|campo");

cadena = cadena.toLowerCase();
// ------------------------------------------------------

if(profesores.test(cadena)){
    if(curso.test(cadena)){
        if(llevar.test(cadena)){
            // mostrar a todos los profesores que me enseñan el curso de matematica
            if(math.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length; x++){
                    if(datos_p.Cursos[x].Curso == "Matenatica"){
                        console.log("Nombre: ",datos_p.Cursos[x].Profesor, "\n Curso: ", datos_p.Cursos[x].Curso);
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length; x++){
                    if(datos_p.Cursos[x].Curso == "Fisica"){
                        console.log("Nombre: ",datos_p.Cursos[x].Profesor, "\n Curso: ", datos_p.Cursos[x].Curso);
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length; x++){
                    if(datos_p.Cursos[x].Curso == "Quimica"){
                        console.log("Nombre: ",datos_p.Cursos[x].Profesor, "\n Curso: ", datos_p.Cursos[x].Curso);
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length; x++){
                    if(datos_p.Cursos[x].Curso == "Computacion"){
                        console.log("Nombre: ",datos_p.Cursos[x].Profesor, "\n Curso: ", datos_p.Cursos[x].Curso);
                    }
                }
            }
        }else{
            // mostrar a todos los profesores que enseñan el curso de matematica    
            if(math.test(cadena)){
                for(var x=0; x<data.length; x++){
                    if(data[x].Curso=="Matematica"){
                        console.log("Nombre: ", data[x].Profesor,"\n Curso: ",data[x].Curso);
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0; x<data.length; x++){
                    if(data[x].Curso=="Quimica"){
                        console.log("Nombre: ", data[x].Profesor,"\n Curso: ",data[x].Curso);
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0; x<data.length; x++){
                    if(data[x].Curso=="Computacion"){
                        console.log("Nombre: ", data[x].Profesor,"\n Curso: ",data[x].Curso);
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0; x<data.length; x++){
                    if(data[x].Curso=="Fisica"){
                        console.log("Nombre: ", data[x].Profesor,"\n Curso: ",data[x].Curso);
                    }
                }
            }
        }
    }else{
        for(var x=0; x<data.length; x++){
            console.log("Nombre: ", data[x].Profesor,"\n Curso: ",data[x].Curso);
        }
    }
}
