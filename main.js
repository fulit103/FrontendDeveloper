const campo_texto = document.getElementById("campo-texto");


//campo_texto.addEventListener( "keyup", keyupCampoTexto );

campo_texto.addEventListener( "keyup", function (event){

    if( event.keyCode==13 ){
        console.log("presionaron el enter")
        clickAgregar()
    }
    else{
        console.log("Diferente al enter")
    }

});


function clickAgregar(){
    //alert( "Escribiste: " + campo_texto.value );

    const div_tabla = document.getElementById( "div-tabla" );


    const parrafo = document.createElement("p");
    parrafo.textContent =  campo_texto.value;

    div_tabla.append( parrafo )


    campo_texto.value = "";

    campo_texto.focus();
}




/*function keyupCampoTexto( event ){

    if( event.keyCode==13 ){
        console.log("presionaron el enter")
        clickAgregar()
    }
    else{
        console.log("Diferente al enter")
    }
        
} */