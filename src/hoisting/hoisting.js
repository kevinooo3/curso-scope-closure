//Debemos entender al hoisting como cuando los globos se elevan en el aire.
    // primer caso : cuando tenemos 
    console.log(` pi pero con declaracion e inicializacion desues de llamarlo: ${pi}`);
    var pi = 3.14;
    // El resultado aqui es undefined por que sucede el hoisting aqui, es decir 
    // var pi = undefined , primero se inicializa el pi en undefined
    // despues se asigna el valor 3.14 , es por eso que si ponemos el console log despues de la declaracion y asignacion si nos imprimira el valor 3.14
     console.log(` pi con declararacion e incializacion: ${pi}`);
    