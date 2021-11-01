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

//-----------------------------------------------------------------------------------------------------------------
//import { datos_p } from "./data1"; 
var cadena = "cuantos cursos de matematica, fisica y computacion estoy llevando";

var llevar = RegExp("llevo|llevando");
var estoy = RegExp("estoy matriculado|estoy matriculada");
var cursos = /cursos/;

// cursos:
var math = /matematica/;
var fisica = /fisica/;
var quimica =/quimica/;
var computacion = /computacion/;

var o=/o/;

var y=/y/;

// nombre 
var nombre = RegExp("nombre|nombres");
var profesor = RegExp("profesor|docente|tutor");

// preguntas
var cual = RegExp("cual|cuales");
var que = RegExp("que");

// datos personales
var edad = RegExp("edad|años");
var nombremio = RegExp("mi nombre|cómo me llamo");
var mi = RegExp("mis|mi");

var alumno = RegExp("Alumnos|Estudiantes");
m =0;
// complemento
var mostrar_dar = RegExp("mostrar|muestrame|dar|dame");
var buscador = RegExp("buscador");
var ayuda = RegExp("help|ayuda");
// buscador(Cursos:[],Profesor:[],Nombre:[]/(ALL|MI))


cadena = cadena.toLowerCase();

// cursos 
console.log(llevar.test(cadena));
if(llevar.test(cadena)){
    if(cursos.test(cadena)){
        if(math.test(cadena)){
            console.log();
            for(var x=0; x<data.length ; x++){
                if(data[x].Curso=="Matematica"){
                    console.log("Curso: ",data[x].Curso,"\n Nomnre: ",data[x].Nombre,"\n Profesor: ",data[x].Profesor);
                    m ++;
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
    }else{
        
    }
}

    // nombres de profesor o cursos de profesores

