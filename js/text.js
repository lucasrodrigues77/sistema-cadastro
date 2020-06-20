incluirTexto(
    [ 'Sistema de Cadastro de Usuários', 'Bootcamp IdeiaSST'  ], 
    'text', ['tomato','#ff0', 'lightblue']
)
function incluirTexto(frases, id, cores) {
   if(cores === undefined) cores =['#fff']; 
      var visivel = true
      var cursor = document.getElementById('console')
      var contagemDeLetras = 1;
      var x = 1;
      var aguardar = false
      var localTexto = document.getElementById(id)
      localTexto.setAttribute('style', 'color:' + cores [0])

        window.setInterval(function() {
             if(contagemDeLetras === 0 && aguardar === false){
                 aguardar =  true
                 localTexto.innerHTML = frases[0].substring(0, contagemDeLetras)
                   window.setTimeout(function(){
                       var corUsada  = cores.shift()
                       cores.push(corUsada)
                       var fraseUsada = frases.shift()
                       frases.push(fraseUsada)
                       x =1
                       localTexto.setAttribute('style', 'color:' + cores [0])
                    contagemDeLetras += x
                    aguardar = false
                   }, 1000)

             }

            else if(contagemDeLetras === frases[0].length + 1 && aguardar === false) {
              
                aguardar = true;
                window.setTimeout(function() {
                    x = -1
                    contagemDeLetras += x
                    aguardar = false

                }, 1000)
                
            }
            else if(aguardar === false){
               localTexto.innerHTML = frases[0].substring(0, contagemDeLetras)
               contagemDeLetras += x
               
            }
        }, 120)

        window.setInterval(function() {
            if(visivel === true) {
                cursor.className = 'console-underscore hidden'
                visivel = false
            } else {
                cursor.className = 'console-underscore'
                visivel = true
            }
        }, 400)
}
