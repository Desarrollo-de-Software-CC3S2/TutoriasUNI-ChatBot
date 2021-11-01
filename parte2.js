var cadena = "mostrar todos los cursos que estoy llevando con el profesor Luigui";
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
            Curso:"Computacion",
            Nombre:"Computacion Grafica",
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




var llevar = RegExp("llevo|llevando|me enseña");
var estoy = RegExp("estoy matriculado|estoy matriculada");
var cursos = /cursos/;
var curso = RegExp/("curso|area|campo");

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

cadena = cadena.toLowerCase();

// ------------------------------------------------------

if(cursos.test(cadena)){
    if(profesor.test(cadena)){
        console.log("profesor");
        if(llevar.test(cadena)){
            console.log("llevar");
            if(math.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && datos_p.Cursos[x].Curso == "Matematica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso ,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos[x].length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && datos_p.Cursos[x].Curso == "Fisica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso ,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos[x].length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && datos_p.Cursos[x].Curso == "Quimica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso ,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && datos_p.Cursos[x].Curso == "Computacion"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso ,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                    }
                }
            }

        }else{
            if(math.test(cadena)){
                m++;
                for(var x=0 ; x<data.length ; x++){
                    var zz = data[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && data[x].Curso == "Matematica"){
                        console.log("Curso: ",data[x].Curso ,"\n Profesor: ",data[x].Profesor);
                    }
                }
            }
            if(fisica.test(cadena)){
                m++;
                for(var x=0 ; x<data.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && data[x].Curso == "Fisica"){
                        console.log("Curso: ",data[x].Curso ,"\n Profesor: ",data[x].Profesor);
                    }
                }
            }
            if(quimica.test(cadena)){
                m++;
                for(var x=0 ; x<datos_p.Cursos[x].length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && data[x].Curso == "Quimica"){
                        console.log("Curso: ",data[x].Curso ,"\n Profesor: ",data[x].Profesor);
                    }
                }
            }
            if(computacion.test(cadena)){
                m++;
                for(var x=0 ; x<data.length ; x++){
                    var zz = data[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena) && data[x].Curso == "Computacion"){
                        console.log("Curso: ",data[x].Curso ,"\n Profesor: ",data[x].Profesor);
                    }
                }
            }

            if(m==0){
                for(var x=0 ; x<data.length ; x++){
                    var zz = data[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    if(Nombre.test(cadena)){
                        console.log("Curso: ",data[x].Curso ,"\n Profesor: ",data[x].Profesor);
                    }
                }
            }

        }
    }else{
        // cursos que llevo
        if(llevar.test(cadena)){
            console.log("Imprimir 1")
            if(math.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length ; x++){
                    if(data[x].Curso=="Matematica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso,"\n Nomnre: ",datos_p.Cursos[x].Nombre,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                        m++;
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length ; x++){
                    if(data[x].Curso=="Fisica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso,"\n Nomnre: ",datos_p.Cursos[x].Nombre,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                        m++;
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length ; x++){
                    if(data[x].Curso=="Matematica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso,"\n Nomnre: ",datos_p.Cursos[x].Nombre,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                        m++;
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0; x<datos_p.Cursos.length ; x++){
                    if(data[x].Curso=="Matematica"){
                        console.log("Curso: ",datos_p.Cursos[x].Curso,"\n Nomnre: ",datos_p.Cursos[x].Nombre,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                        m++;
                    }
                }
            }
            if(m==0){
                for(var x=0; x<datos_p.Cursos.length ; x++){
                    console.log("Curso: ",datos_p.Cursos[x].Curso,"\n Nomnre: ",datos_p.Cursos[x].Nombre,"\n Profesor: ",datos_p.Cursos[x].Profesor);
                }
            }

        }else{
        // cursos totales
            if(math.test(cadena)){
                for(var x=0; x<data.length ; x++){
                    if(data[x].Curso=="Matematica"){
                        console.log("Curso: ",data[x].Curso,"\n Nomnre: ",data[x].Nombre,"\n Profesor: ",data[x].Profesor);
                        m++;
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0; x<data.length ; x++){
                    if(data[x].Curso=="Computacion"){
                        console.log("Curso: ",data[x].Curso,"\n Nombre: ",data[x].Nombre,"\n Profesor: ",data[x].Profesor);
                        m++;
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0; x<data.length ; x++){
                    if(data[x].Curso=="Fisica"){
                        console.log("Curso: ",data[x].Curso,"\n Nombre: ",data[x].Nombre,"\n Profesor: ",data[x].Profesor);
                        m++;
                    }
                }
            }
            if(m==0){
                for(var x=0; x<data.length ; x++){
                    console.log("Curso: ",data[x].Curso,"\n Nombre: ",data[x].Nombre,"\n Profesor: ",data[x].Profesor);
                }
            }
        }
    }
}


