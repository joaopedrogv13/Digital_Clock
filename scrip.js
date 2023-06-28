const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let horaAtual = dateToday.getHours();
    let minutosAtual = dateToday.getMinutes();
    let segundosAtual = dateToday.getSeconds();

    if(horaAtual < 10) horaAtual = '0'+horaAtual;
    if(minutosAtual < 10) minutosAtual = '0' + minutosAtual;
    if(segundosAtual < 10) segundosAtual = '0'+segundosAtual;

    horas.textContent = horaAtual;
    minutos.textContent = minutosAtual;
    segundos.textContent = segundosAtual;
}, 1000);
