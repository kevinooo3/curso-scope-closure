//monedero 
    function monedero(){
        let saldo=0;
        function ingresoMoneda(dinero){
            saldo += dinero;
            return console.log(`su saldo es: ${saldo}`);
        }
        return ingresoMoneda;
    }
    var moneda = monedero();
    moneda(12);
    moneda(12);
    moneda(12);