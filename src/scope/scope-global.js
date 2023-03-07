// explicacion del scope global
    var nombre = 'kevin';
    function variableGlobalDentroFuncionyBloque(){
        console.log(`entro al scope funcion`);
        if(nombre==='kevin'){
            console.log("tambien entro al scope bloque")
        }
    };
    variableGlobalDentroFuncionyBloque();
// scope global : variable creada dentro de una funcion 
    function scopeAdentroAfuera(){
        apellido = 'penelope';
            console.log(`Hola ${apellido} desde la funcion`);
        if(apellido='penelope'){
           console.log(`Hola ${apellido} desde el bloque`); 
        }
    }
    scopeAdentroAfuera();
    console.log("Comprobando que cuando no pones var let ni const , igualmente se puede usar la varible en todo el docuemnto, chalan --->"+apellido);


