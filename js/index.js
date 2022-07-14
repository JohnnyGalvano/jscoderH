//Cotizador de presupuestos de reparacion de electrodomesticos//
inicio ()
function inicio (){
let equipo = prompt (`Bienvenido! Ingrese el equipo para comenzar:
                            1. HELADERA
                            2. LAVARROPAS`)
if(equipo == Number (1)){
    heladera()
} else if(equipo == Number (2)) {
    lavarropas ()
}else {
    alert (`Ingrese una opcion valida`)
    inicio ()
}
}
function heladera (){
        const tecnologia = prompt (`seleccione la tecnologia de enfriamiento:
                            NO FROST
                            CICLICA`)
        const marca = prompt (`seleccione la marca del equipo:
                                WHIRLPOOL
                                LG
                                SAMSUNG`)
        const falla = prompt (`Seleccione la averia:
                                NO FEEZA/ENFRIA
                                NO ARRANCA
                                CONGELA EN HELADERA
                                OTRA FALLA`)
                                if (falla == `OTRA FALLA`){
                                    alert (`Debe comunicarse con nuestro servicio de atencios al cliente`)
                                } else if (falla == `NO FREEZA/ENFRIA`){
                                    alert (`El costo de reparar su heladera ${tecnologia} ${marca} es de $45000`)
                                } else if (falla == `NO ARRANCA`){
                                    alert (`El costo de reparar su heladera ${tecnologia} ${marca} es de $20000`)
                                } else {
                                    alert (`El costo de reparar su heladera ${tecnologia} ${marca} es de $30000`)
                                }
    }
function lavarropas (){
    const tecnologia = prompt (`ingrese la tecnologia de lavado de su lavarropas:
                                ELECTRONICO
                                RELOJ
                                INVERTER`)
    const marca = prompt (`ingrese la marca de su lavarropas:
                            DREAN
                            WHIRLPOOL
                            SAMSUNG
                            LG`)
    const falla = prompt (`ingrese la falla de su lavarropas:
                            1. NO LAVA
                            2. HACE MUCHO RUIDO
                            3. NO ENCIENDE
                            4. OTRA FALLA`)
                            if (falla == Number (1)){
                                alert (`El costo de la reparacion de su lavarropas ${tecnologia} ${marca} es de $28000`)
                            } else if (falla == Number (2)){
                                alert (`El costo de la reparacion de su lavarropas ${tecnologia} ${marca} es de $25000 a $30000`)
                            } else if (falla == Number (3)){
                                alert (`El costo de la reparacion de su lavarropas ${tecnologia} ${marca} es de $30000`)
                            } else if (falla == Number (4)){
                                alert (`Debe comunicarse con nuestro servicio de atencion al cliente`)
                            } else {
                                alert (`ingrese una opcion valida`)
                                inicio()
                            }

}
alert (`Los presupuestos aqui expresados estan sujetos a verificacion por parte de nuestro staff tecnico`)
