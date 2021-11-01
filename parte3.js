var cadena = "mostrar tareas del profesor Peter en el curso de fisica";
const datos_p = {
    Nombre:"Luis",
    Edad:22,
    Correo:"luis.seminario.s@uni.pe",
    Cursos:[
        {
            Curso:"Matematica",
            Nombre:"Ecuaciones Diferenciales",
            Profesor:"Luigui",
            Tareas: [
                {
                    Nombre:"Tarea1",
                    Resuelto:true
                },
                {
                    Nombre:"Tarea2",
                    Resuelto:false  
                },
                {
                    Nombre:"Tarea3",
                    Resuelto:false  
                },
                
            ]
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Financiera",
            Profesor:"Osbaldo",
            Tareas: [
                {
                    Nombre:"Tareas ss",
                    Resuelto:true
                },
                {
                    Nombre:"Tareas ss1",
                    Resuelto:false  
                },
            ]
        },
        {
            Curso:"Matematica",
            Nombre:"Matematica Discreta",
            Profesor:"Luigui",
            Tareas:[
                {
                    Nombre:"Tareas de S1",
                    Resuelto:true
                },
                {
                    Nombre:"Tareas de S2",
                    Resuelto:false  
                },
            ]
        },
        {
            Curso:"Matematica",
            Nombre:"Trigonometria",
            Profesor:"Luinguini",
            Tareas:[

            ]
        },
        {
            Curso:"Fisica",
            Nombre:"Choques Amortiguados",
            Profesor:"Peter",
            Tareas:[           
            {
                Nombre:"Tareas M1",
                Resuelto:false
            }
        ]

        },
        {
            Curso:"Computacion",
            Nombre:"Programacion Algebraica",
            Profesor:"Peter",
            Tareas:[
                {
                    Nombre:"Tareas sk1",
                    Resuelto:true
                },
                {
                    Nombre:"Tareas sk1_1",
                    Resuelto:false  
                },
                {
                    Nombre:"Tareas sk2_2",
                    Resuelto:true
                },
                {
                    Nombre:"Tareas sk3_2",
                    Resuelto:false  
                },
            ]

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
            Profesor:"Peter"
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
var curso = RegExp("curso|campo");
var tareas = RegExp("tareas|asignaturas|entregables");

cadena = cadena.toLowerCase();

if(tareas.test(cadena)){
    if(profesor.test(cadena)){
        if(curso.test(cadena)){
            if(math.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length ; y++){
                        if(Nombre.test(cadena) && datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso=="Matematica"){
                            console.log("Nombre : ", datos_p.Cursos[x].Tareas[y].Nombre,"\n Curso: ", datos_p.Cursos[x].Curso ,"\n Profesor:", datos_p.Cursos[x].Profesor);
                        }
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length ; y++){
                        if(Nombre.test(cadena) && datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso=="Fisica"){
                            console.log("Nombre : ", datos_p.Cursos[x].Tareas[y].Nombre,"\n Curso: ", datos_p.Cursos[x].Curso ,"\n Profesor:", datos_p.Cursos[x].Profesor);
                        }
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length ; y++){
                        if(Nombre.test(cadena) && datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso=="Quimica"){
                            console.log("Nombre : ", datos_p.Cursos[x].Tareas[y].Nombre,"\n Curso: ", datos_p.Curso[x].Curso ,"\n Profesor:", datos_p.Cursos[x].Profesor);
                        }
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    var zz = datos_p.Cursos[x].Profesor;
                    zz = zz.toLocaleLowerCase();
                    var Nombre = RegExp(zz);
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length ; y++){
                        if(Nombre.test(cadena) && datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso=="Computacion"){
                            console.log("Nombre : ", datos_p.Cursos[x].Tareas[y].Nombre,"\n Curso: ", datos_p.Cursos[x].Curso ,"\n Profesor:", datos_p.Cursos[x].Profesor);
                        }
                    }
                }
            }
        }else{
            for(var x=0 ; x<datos_p.Cursos.length ; x++){
                var zz = datos_p.Cursos[x].Profesor;
                zz = zz.toLocaleLowerCase();
                var Nombre = RegExp(zz);
                for(var y=0 ; y<datos_p.Cursos[x].Tareas.length ; y++){
                    if(Nombre.test(cadena) && datos_p.Cursos[x].Tareas[y].Resuelto == false){
                        console.log("Nombre : ", datos_p.Cursos[x].Tareas[y].Nombre,"\n Curso: ", datos_p.Cursos[x].Curso ,"\n Profesor:", datos_p.Cursos[x].Profesor);
                    }
                }
            }
        }
    }else{
        if(curso.test(cadena)){
            if(math.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length; y++){
                        if(datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso == "Matematica"){
                            console.log("Nombre: ",datos_p.Cursos[x].Tareas[y].Nombre, "\n Curso: ", datos_p.Cursos[x].Curso);
                        }
                    }
                }
            }
            if(fisica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length; y++){
                        if(datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso == "Fisica"){
                            console.log("Nombre: ",datos_p.Cursos[x].Tareas[y].Nombre, "\n Curso: ", datos_p.Cursos[x].Curso);
                        }
                    }
                }
            }
            if(quimica.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length; y++){
                        if(datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso == "Quimica"){
                            console.log("Nombre: ",datos_p.Cursos[x].Tareas[y].Nombre, "\n Curso: ", datos_p.Cursos[x].Curso);
                        }
                    }
                }
            }
            if(computacion.test(cadena)){
                for(var x=0 ; x<datos_p.Cursos.length ; x++){
                    for(var y=0 ; y<datos_p.Cursos[x].Tareas.length; y++){
                        if(datos_p.Cursos[x].Tareas[y].Resuelto == false && datos_p.Cursos[x].Curso == "Computacion"){
                            console.log("Nombre: ",datos_p.Cursos[x].Tareas[y].Nombre, "\n Curso: ", datos_p.Cursos[x].Curso);
                        }
                    }
                }
            }

        }else{
            console.log("tareas sin resolver: ");
            for(var x=0 ; x<datos_p.Cursos.length ; x++){
                for(var y=0 ; y<datos_p.Cursos[x].Tareas.length; y++){
                    if(datos_p.Cursos[x].Tareas[y].Resuelto == false){
                        console.log("Nombre: ",datos_p.Cursos[x].Tareas[y].Nombre, "\n Curso: ", datos_p.Cursos[x].Curso);
                    }
                }
            }
        }
    }
}
