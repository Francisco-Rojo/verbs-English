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
  

// --------------------------------------------------------------------------------------------------------------------------

        // LOGICA DE VERBOS
    	document.getElementById("result").innerHTML = "-";  // agregamos como punto inicial un -
        document.getElementById("intentos").innerHTML = "intentos: " + 20;  // agregamos como punto inicial 15 en intentos
        document.getElementById("counting").innerHTML = "POINTS: " + 3; // agregamos como punto inicial 3 en vida
        let counter = 3; // CONTADOR DE VIDAS 3
        let number; // NUMERO ALEATORIO
        let intentos = 20;  //numero de intentos

        let verb = ["be", "beat", "become", "begin", "bend", "bet", "bite", "bleed", "blow", "break", "bring", "build",
        "burst", "buy", "catch", "come", "choose", "cost", "dive", "do", "draw", "drink", "drive", "eat", "fall", "feed", 
        "feel", "find", "fly", "forget", "forget", "freez", "get", "give", "go","grow", "hear", "hide", "hit", "hold",  
        "hurt", "keep", "know", "lead", "leave", "lent", "let", "lose", "make", "mean", "meet", "pay", "read", "ride", "ring",
        "rise", "run", "say", "see", "sell", "sent", "set", "shake", "shoot", "show", "sing", "sink", "sit", "sleep", "slide", 
        "speak", "spend", "spit", "spread", "stand", "steal", "stick", "sting", "sweep", "swim", "take", "teach", "tear", "tell",
        "think", "throw", "understand", "wake", "wear", "win","write"];
        
        let verb_past = ["was/were", "beat","became", "began", "bent", "bet", "bit", "bled", "blew", "broke", "brought", "built",
        "burst", "bought", "caught", "came", "chose", "cost", "dove", "did", "drew", "drank", "drove", "ate", "fell", "fed",
        "felt", "found", "flew", "forgot", "forgot", "froze", "got", "gave", "went", "grew", "heard", "hid", "hit", "held", "hurt", 
        "kept", "knew", "led", "left", "lent", "let", "lost", "made", "meant", "met", "paid", "read", "rode", "rang", "rose", 
        "ran", "said", "saw", "sold", "sent", "set", "shook", "shot", "showed", "sang", "sank", "sat", "slept", "slid", "spoke", 
        "spent", "spit", "spread", "stood", "stole", "stuck", "stung", "swept", "swam", "took", "taught", "tore", "told",
        "thought", "threw", "understood", "woke", "wore", "won", "wrote"];
        
        let verb_partipiple = ["been", "beat", "become", "begun", "bent", "bet", "bitten", "bled", "blown", "broken", "brought", "built",
        "burst", "bought", "caught", "come", "chose", "cost", "diven", "done", "drawn", "drunk", "driven", "eaten", "fallen", "fed", 
        "felt", "found", "flown", "forgotten", "forgotten", "frozen", "gotten", "given", "gone", "grown", "heard", "hidden", "hit", "held",
        "hurt", "kept", "known", "led", "left", "lent", "let", "lost", "made", "meant", "met", "paid", "read", "ridden", "rung", "risen", 
        "run", "said", "seen", "sold", "sent", "set", "shaken", "shot", "shown", "sung", "sunk", "sat", "slept", "slid", "spoken", "spent", 
        "spit", "spread", "stood", "stolen", "stuck", "stung", "swept", "swum", "taken", "taught", "torn", "told", "thought", "throw", 
        "understood", "woken", "worn", "won", "written"];
        
        let translation = ["ser/estar", "golpear", "llegar a ser", "empezar", "doblar", "apostar", "morder", "sangrar", "soplar", 
        "romper", "traer", "construir", "estallar", "comprar", "atrapar", "venir", "escoger", "costar", "bucear", "hacer", "dibujar", 
        "beber", "manejar", "comer", "caer", "alimentar", "sentir", "encontrar", "volar", "olvidar", "olvidar", "congelar", "conseguir",
        "dar", "ir", "cultivar", "oir", "esconder", "golpear", "sostener", "lastimar", "conservar", "saber", "mandar", "salir", "prestar",
        "permitir", "perder", "hacer", "significar", "reunirse", "pagar", "leer", "montar", "sonar", "subir", "correr", "decir", "ver", 
        "vender", "enviar", "establecer", "sacudir", "disparar", "mostrar", "cantar", "hundir", "sentarse", "dormir", "resbalar", "hablar", 
        "gastar", "escupir", "extender", "pararse", "robar", "clavar", "picar", "barrer", "nadar", "tomar", "enseñar", "rasgar", "decir",
        "pensar", "tirar", "entender", "despertar", "usar", "ganar", "escribir"];



        console.log(verb.length);
        console.log(verb_past.length);
        console.log(verb_partipiple.length);
        console.log(translation.length);

        // console.log(verb[25]);
        // console.log(verb_past[25]);
        // console.log(verb_partipiple[25]);
        // console.log(translation[25]);


        number_random(); // llamamos la funcion de numero aleatorio

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

        function number_random() {
            number = Math.random();
            number = number * 90;
            
            document.getElementById("get_verb").innerHTML = verb[Math.round(number)] +" - "+
            verb_past[Math.round(number)] +" - "+ verb_partipiple[Math.round(number)];
        }

        // funcion click boton
        function get_translation() {
            document.getElementById("intentos").innerHTML = "intentos: " + --intentos; 
            let data = document.getElementById("translation").value;

            if (data == translation[Math.round(number)] ) {
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
            document.getElementById("result").innerHTML = translation[Math.round(number)];
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