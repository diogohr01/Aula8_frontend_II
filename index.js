let botaoenviar = document.getElementById('enviar')


botaoenviar.addEventListener('click', (event)=>{
event.preventDefault()
})


botaoenviar.onmouseover = function(){
    botaoenviar.style.color = 'white';
}


botaoenviar.onmouseout = function(){
    botaoenviar.style.color = 'black';
}

window.onkeyup = function (evento) {
    console.log(evento);
    console.log(`A tecla ${evento.key} foi pressionada`);
}