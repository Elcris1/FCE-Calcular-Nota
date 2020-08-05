function calcular(){
    var numEncertades = parseInt(document.getElementById("inputEncertades").value);
    var numTotal = parseInt(document.getElementById("inputTotal").value);
    var floatEncertades = parseFloat(numEncertades);
    var floatTotal = parseFloat(numTotal);
    if(document.getElementById("inputEncertades").value.length == 0 ||
    document.getElementById("inputTotal").value.length == 0 ){
        alert("Has de introduir dos valors");
    }
    else if (isNaN(parseInt(numEncertades)) || isNaN(parseInt(numTotal))) {
        alert("Has de introduir valors numerics");
    }
    else if (numEncertades>numTotal){
        alert("El numero de respostes correctes no pot ser superior al numero total de respostes");
    }
    else {
        var nota = floatEncertades*10/floatTotal;
        if (nota>=6){
            document.getElementById("resposta").setAttribute("class", "aprovat");
            document.getElementById("resposta").innerHTML = "La teva nota és " + nota.toFixed(2);
        }
        else {
            document.getElementById("resposta").setAttribute("class", "suspes");
            document.getElementById("resposta").innerHTML = "La teva nota és " + nota.toFixed(2);
        }

    }
}