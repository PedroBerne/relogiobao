const horas = document.getElementById('horas');
const minutos = document.getElementById('Minutos');
const segundos = document.getElementById('Segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();


    horas.textContent = hr;
    Minutos.textContent = min;
    segundos.textContent = s;
 
})