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



let adjetives = ["angry", "happy", "sad", "hungry", "sleepy", "exhausted", "awake", "asleep", "good", "bad", 
"beautiful", "ugly", "handsome", "lovely", "plain", "bitter", "sweet", "delicious", "disgusting", "tidy", 
"dirty", "messy", "hot", "warm", "cool", "cold", "wet", "dry", "rainy", "sunny", "snowy", "early", "late", 
"fat", "thin", "tall", "short", "big", "small", "full", "empty", "boring", "interesting", "slow", "fast", 
"thirsty", "strong", "long", "expensive", "cheap", "new", "young", "weak", "old", "tired", "careful", "hard", 
"lazy", "busy", "careless", "noise", "tired", "awful", "dangerous", "dizzy", "successful", "sudden", "uncomfortable", 
"embarrassed", "quickly", "quiet", "smart", "think", "sudden"];

let adjetives_translation = ["enojado", "feliz", "triste", "hambriento", "somnoliento", "muy cansado", 
"despierto", "dormido", "bueno", "malo", "hermosa", "feo", "guapo", "muy hermoso", "sencillo", "amargo", 
"dulce", "delicioso", "asqueroso", "ordenado", "sucio", "desordenado", "caliente", "cálido", "fresco", "frio", 
"mojado", "seco", "lluvioso", "soleado", "nevado", "temprano", "tarde", "gordo", "delgado", "alto", "corto", 
"grande", "pequeño", "completo", "vacío", "aburrido", "interesante", "lento", "rápido", "sediento", "fuerte", 
"largo", "costoso", "barato", "nuevo", "joven", "débil", "viejo", "cansado", "cuidadoso", "difícil", 
"perezoso", "ocupado", "descuidado", "ruidoso", "cansado", "horrible", "peligroso", "mareado", "exitoso", 
"repentino", "incomodo", "avergonzado", "rapidamente", "tranquilo", "inteligente", "grueso", "repentino"];


console.log(adjetives.length);
console.log(adjetives_translation.length);





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
    number = number * 73; // multiplicamos por 100 por que es el total del numero de datos en la lista
    
    // imprimimos los verbos obtenidos en la lista
    document.getElementById("get_adjetive").innerHTML = adjetives[Math.round(number)];
}



 // funcion click boton
function get_translation() {
    document.getElementById("intentos").innerHTML = "intentos: " + --intentos; 
    let data = document.getElementById("translation").value;

    if (data == adjetives_translation[Math.round(number)] ) {
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



function see() {
    document.getElementById("result").innerHTML = adjetives_translation[Math.round(number)];
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