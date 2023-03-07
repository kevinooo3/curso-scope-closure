// En var se puede reasignar y redeclarar
    //Ejemplo de reasignacion
    var nombre = "kevinooo";
    nombre = "dj peligro";
    console.log(nombre); // muestra dj eligro

    //Ejemplo de redeclaracion
     var jugador = "messi";
     var jugador = "cr7";
     console.log(jugador);// tomo cr7

// LET SOLO PERMITE REASIGNAR
    //Ejemplo de reasignacion
    let nombre = "kevinooo";
    nombre = "dj peligro";
    console.log(nombre); // muestra dj eligro

    //Ejemplo de redeclaracion
     let jugador = "messi";
     let jugador = "cr7";
     console.log(jugador);// sale error

// CONST NO DEJA  REASIGNAR NI REDECLARAR, PERO SI PUEDES MODIFICAR CUANDO EL CONST ES UN ARRAY
    //Ejemplo de reasignacion
    const nombre = "kevinooo";
    nombre = "dj peligro";
    console.log(nombre); // sale error

    //Ejemplo de redeclaracion
     const jugador = "messi";
     const jugador = "cr7";
     console.log(jugador); // sale error

    // CUIDADO ACA CASO CONST CON ARRAY SI DEJA MMODIFICAR
        const frutas =["manzana","platano","naranja"];
        console.log(`Estado inicial de las frutas: ${frutas}`);
        frutas.push("pera");
        console.log(`Estado final de las frutas: ${frutas}`);// a pesar de que es const el array , se puede agregar valores y eliminar.