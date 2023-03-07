//Scope de bloque
 var validacion = "gg";    
function validacionScopeBloque(){
        console.log(`el nombre desde la funcion: ${nombre}`);
        if(validacion === "gg"){
            var nombre = "kevinooo";
            console.log(`el nombre desde el bloque: ${nombre}`); 
        }
    }
    validacionScopeBloque();//sale que desde la funcion no detecta el nombre de la variable
    // y desde el console.log desde el bloque si sale
    