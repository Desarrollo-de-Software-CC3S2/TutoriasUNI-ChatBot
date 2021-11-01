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


var cadena = "como me uno a clases";

// estoy llevando
var llevar = RegExp("llevo|llevando|me enseñan");
var estoy = RegExp("estoy matriculado|estoy matriculada");
var como_unirme = RegExp("como me matriculo|como me uno|cómo me uno|cómo unirme|cómo entrar");
// mostrar cursos
var cursos = /cursos/;

// cursos:
var math = /matematica/;
var fisica = /fisica/;
var quimica =/quimica/;
var computacion = /computacion/;

// nombre 
var nombre = RegExp("nombre|nombres");
var profesor = RegExp("profesor|docente|tutor");

// mostrar profesores
var profesores = RegExp("profesores|docentes|tutores");
var curso = RegExp("curso|área|area");

// preguntas
var cual = RegExp("cual|cuales");
var que = RegExp("que");

// datos personales
var edad = RegExp("edad|años");
var nombremio = RegExp("mi nombre|cómo me llamo");
var mi = RegExp("mis|mi");

var alumno = RegExp("Alumnos|Estudiantes");

var m = 0;

// complemento
var mostrar_dar = RegExp("mostrar|muestrame|dar|dame|listar");

var hola = RegExp("hola|Hi|holis");
var buscador = RegExp("buscador");
var ayuda = RegExp("help|ayuda");

// tareas
var tareas = RegExp("tareas");

cadena = cadena.toLowerCase();


if(nombremio.test(cadena) && !hola.test(cadena)){
    console.log("mi nombre es: ",datos_p.Nombre);
}
if(edad.test(cadena)){
    console.log("mi nombre es: ",datos_p.Edad);
}
if(ayuda.test(cadena)){
    console.log("Hola, veo que has solicitado ayuda, me presento \n");
    console.log("Comandos para Unirse a clases: ");
    console.log("debes pedir el id para poder unirte ")
    console.log("Te dare un ejemplo: ");
    console.log("mostrar id de todos los cursos de matematica ");
}

if(como_unirme.test(cadena)){
    console.log("Comandos para Unirse a clases: ");
    console.log("Debes pedir el id para poder unirte ")
    console.log("Te dare un ejemplo: ");
    console.log("Mostrar id de todos los cursos de matematica ");
}

if(hola.test(cadena)){
    if(nombremio.test(cadena)){
        console.log("hola ", datos_p.Nombre, " que tal?, Es un gusto saludarte ");
    }else{
        console.log("hola, soy un chatbot, puedes preguntarme muchas cosas, aunque estoy limitado para responder solo consultas");
        console.log("muy pronto podre interactuar contigo ");
    }
}