//Scope de funcion
var validacion = "gg";    
function validacionScopeFuncion(){
    var nombre = "kevinooo";
        console.log(`el nombre desde la funcion: ${nombre}`);
        
        if(validacion === "gg"){
            
            console.log(`el nombre desde el bloque: ${nombre}`); 
        }
    }
    validacionScopeFuncion();//ambos console imprimer bien ya que la funcion es padre de bloque y por ende todo lo que ste dentro tambien sera reconocido