function calculo(){
    var m = document.getElementById('m').value
    console.log('Módulo: '+m)
    var z = document.getElementById('z').value
    console.log('Número de dentes: '+z)
    
    var d = (m*z)
    console.log('Diâmetro: '+d)
    
    document.getElementById('dia').innerHTML = "O diâmetro é: "+ d + " mm"
        } 