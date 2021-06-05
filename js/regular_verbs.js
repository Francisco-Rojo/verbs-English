// ANIMACIONES
        window.sr = ScrollReveal();

        sr.reveal('nav', {
            duration: 1500,
            delay: 700
        });

        sr.reveal('h1', {
            duration: 1000,
            delay: 700
        });


        sr.reveal('img', {
            duration: 1500,
            origin: 'top',
            distance: '250px',
            viewFactor: 0.7
        }); 

        sr.reveal('#btn1', {
          
            duration: 1500,
            origin: 'left',
            distance: '250px'
        });

        sr.reveal('#btn2', {
          
            duration: 1500,
            origin: 'right',
            distance: '250px'
        });

        sr.reveal('#btn3', {
          
            duration: 1500,
            origin: 'bottom',
            distance: '250px'
        });


//----------------------------------------------------------------------------------------------------------------

// LISTA DE VERBOS EN LISTA

let regular_verb = ["ask", "answer", "arrive", "attend", "act", "admit", "add", "brush", "boil", "close", "call", "cook", 
"clap", "carry", "continue", "change", "correct", "cry", "clean", "complete", "dance", "drop", "dress", "discover", 
"dream", "discuss", "explain", "enjoy", "expect", "finish", "follow", "fix", "help", "happen", "invite", "interrup", 
"jump", "kiss", "like", "look", "listen", "live", "love", "laugh", "move", "mix", "need", "open", "prepare", "promise", 
"paint", "pray", "pass", "play", "practice", "pronounce", "pull", "rain", "rest", "receive", "remember", "respect", 
"return", "stay", "study", "save", "stop", "spell", "serve", "skate", "smell", "seem", "talk", "try", "turn", "translate", 
"use", "visit", "want", "work", "walk", "wait", "wish", "wash", "watch", "smoke", "climb", "destroy", "adopt", "die", 
"emigrate", "stard", "remove", "graduate", "marry", "learn", "record", "join", "wipe", "bark",  "seek"];

let regular_verb_past = ["asked", "answered", "arrived", "attended", "acted", "admitted", "added", "brushed", "boiled", 
"closed", "called", "cooked", "clapped", "carried", "continued", "changed", "corrected", "cried", "cleaned", "completed",
"danced", "dropped", "dressed", "discovered", "dreamed", "discussed", "explained", "enjoyedj", "expected", "finished", 
"followed", "fixed", "helped", "happened", "invited", "interrupted", "jumped", "kissed", "liked", "looked", 
"listened", "lived", "loved", "laughed", "moved", "mixed", "needed", "opened", "prepared", "promised", "painted", "prayed", 
"passed", "played", "practiced", "pronounced", "pulled", "rained", "rested", "received", "remembered", "respected", 
"returned", "stayed", "studied", "saved", "stopped", "spelled", "served", "skated", "smelled", "seemed", "talked", "tried", 
"turned", "translated", "used", "visited", "wanted", "worked", "walked", "waited", "wished", "washed", "watched", "smoked", 
"climbed", "destroyed", "adopted", "died", "emigrated", "started", "removed", "graduated", "married", "learned", "recorded", 
"joined", "wiped", "barked", "seeked"];

let regular_translation = ["preguntar", "responder", "llegar", "atender", "actuar", "admitir", "agregar", "cepillar", 
"hervir", "cerrar", "llamar", "cocinar", "aplaudir", "llevar", "continuar", "cambiar", "corregir", "llorar", "limpiar",
"completar", "bailar", "caer", "vestir", "descubrir", "soñar", "discutir", "explicar", "disfrutar", "esperar", "terminar", 
"seguir", "arreglar", "ayudar", "suceder", "invitar", "interrumpir", "saltar", "besar", "gustar", "mirar", "escuchar", 
"vivir", "amar", "reir", "mover", "mezclar", "necesitar", "abrir", "preparar", "prometer", "pintar", "ladrar", "pasar", 
"jugar", "practicar", "pronunciar", "jalar", "llover", "descansar", "recibir", "recordar", "respetar", "regresar", 
"permanecer", "estudiar", "salvar", "detener", "deletrear", "servir", "patinar", "oler", "parecer", "hablar", "tratar", 
"girar", "traducir", "usar", "visitar", "querer", "trabajar", "caminar", "esperar", "desear", "lavar", "observar", "fumar", 
"escalar", "destruir", "adoptar", "morir", "emigrar", "iniciar", "quitar", "graduarse", "casarse", "aprender", "grabar", "unir", 
"limpiar", "buscar", "buscar"];


console.log(regular_verb.length);
console.log(regular_verb_past.length);
console.log(regular_translation.length);


 // LOGICA DE VERBOS
document.getElementById("result").innerHTML = "-";  // agregamos como punto inicial un -
document.getElementById("intentos").innerHTML = "intentos: " + 20;  // agregamos como punto inicial 15 en intentos
document.getElementById("counting").innerHTML = "POINTS: " + 3; // agregamos como punto inicial 3 en vida
let counter = 3; // CONTADOR DE VIDAS 3
let number; // NUMERO ALEATORIO
let intentos = 20;  //numero de intentos



number_random(); // llamamos la funcion number_random()


function number_random() {
    number = Math.random(); // llamamos la funcion math.random para poder obtener un numero aleatorio
    number = number * 100; // multiplicamos por 100 por que es el total del numero de datos en la lista
    
    // imprimimos los verbos obtenidos en la lista
    document.getElementById("get_verb").innerHTML = regular_verb[Math.round(number)] +" - "+
    regular_verb_past[Math.round(number)];
}


 // funcion del boton next
function next() {
    number_random(); // llamamos la funcion de numero aleatorio
    document.getElementById("intentos").innerHTML = "intentos: " + --intentos;  // decrementamos los intentos
    resetForm();

    if (intentos == 0) {
        document.getElementById("contenedor").style = "display : none";
        document.getElementById("contenedor2").style = "display : block";
        document.getElementById("win").innerHTML = "SE ACABARON LOS INTENTOS";
    }
}



 // funcion click boton
function get_translation() {
    document.getElementById("intentos").innerHTML = "intentos: " + --intentos; 
    let data = document.getElementById("translation").value;

    if (data == regular_translation[Math.round(number)] ) {
                document.getElementById("result").innerHTML = "Good";
                document.getElementById("counting").innerHTML = "POINTS: " + ++counter;
                document.getElementById("counting").style = "color: lime;";
                document.getElementById("result").style = "color: lime; font-size: 25px;";
                number_random();
                resetForm();

    } else {
                document.getElementById("result").innerHTML = "Bad";
                document.getElementById("counting").innerHTML = "POINTS: " + --counter;
                document.getElementById("counting").style = "color: red;";
                document.getElementById("result").style = "color: red; font-size: 25px;";
    }

            
    if (counter == 10) {
                document.getElementById("counting").innerHTML = "GOOOD";
                document.getElementById("contenedor2").style = "display : block";
                document.getElementById("contenedor").style = "display : none";
                document.getElementById("win").innerHTML = "YOU WIN";
                document.getElementById("win").style = "color: lime";
    }

    if (counter == 0) {
                document.getElementById("contenedor2").style = "display : block";
                document.getElementById("contenedor").style = "display : none";
                document.getElementById("win").innerHTML = "YOU LOST";
                document.getElementById("win").style = "color: red";
    }
}

function see() {
    document.getElementById("result").innerHTML = regular_translation[Math.round(number)];
    document.getElementById("counting").innerHTML = "POINTS: " + --counter;
    document.getElementById("counting").innerHTML = "POINTS: " + --counter;
    document.getElementById("counting").style = "color: red;";
    document.getElementById("result").style = "color: black; font-size: 18px;";
    document.getElementById("translation").focus();

    if (counter <= 0) {
       document.getElementById("contenedor2").style = "display : block";
       document.getElementById("contenedor").style = "display : none";
       document.getElementById("win").innerHTML = "YOU LOST";
 	   document.getElementById("win").style = "color: red";
    }
}

// recargar la pagina        
function reset() {
    location.reload();   
}


// limpiar formulario
function resetForm() {
    document.getElementById("frm1").reset();
    document.getElementById("translation").focus();
}


// bloquear tecla enter
window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
    event.preventDefault();
    }
}, false);