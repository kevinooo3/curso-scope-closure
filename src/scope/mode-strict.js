// mode sctric :Es el modo estricto 
//Ejemplo
    //esta es una mala practica ya que hacemos que js interprte que pi primero vale undefined y despues reasigna a 3.14, si usamos el modo estricto nos dira aguanta compare primero debes declarar si es var const y let y asginar al mismo tiempo o despues , pero si o si debes declarar q tipo de variable vas a usar compare.
    'use strict'
    pi =3.14; // si se declara si imprime usa var let o const
    console.log(pi);// sin el modo estricto si imprime , con el modo esctricto bota error. 
    


    function monedero(gaa){
        var ahorro=0;
        var coin=15;
        return function almacenInterno(coin){
            ahorro += coin;
            console.log(`el ahorro es :${ahorro}`);
            return function almacenNombre(name){
                console.log(`el name es :${name}`);
            }
        }
        
    }
    var gg1 = monedero("dasdasd");
    gg1(12,"gaaa");
    console.log(monedero(12));
    console.log(monedero());
    console.log(monedero());
   
    