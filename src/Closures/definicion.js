//UN CLOSURE ES CUANDO UNA FUNCION HIJA PUEDE ACCEDER A VARIABLES QUE NO ESTAN DENTRO DE SI MISMA.
function abuelo(){
    const grandpa = "agripino";
    function padre(){
        const father = "victor";
          console.log(`${grandpa} es el padre de ${father}`);
         function hijo(){
            const son = "kevin"
            console.log(`${grandpa} es el padre de ${father}, y ${son} es el nieto`);
         }
         return hijo();
    }
    return padre();
}
abuelo();