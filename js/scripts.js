function fechayHora() {
    let fecha = Date();
    document.getElementById("fechayhora").innerHTML = fecha;
}

function resaltar() {
    let links = ["link1","link2","link3","link4","link5"];
    let titulos = ["datos","ap","form","cursos","exp"];
    let anterior = null;

    for(let i = 0; i < links.length; i++){
        document.getElementById(links[i]).addEventListener("click", function() {
            if (anterior != null) {
                document.getElementById(titulos[anterior]).style.color = "Black";
            }
            document.getElementById(titulos[i]).style.color = "Blue";
            anterior = i;

        })
    }
}

fechayHora();
resaltar();





