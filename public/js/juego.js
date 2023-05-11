window.onload = function(){
    console.log('el documento esta listo');

let imagen1 = document.getElementById("fig1");
let imagen2 = document.getElementById("fig2");
let imagen3 = document.getElementById("fig3");
let box1 = document.getElementById("box-game1");
let box2 = document.getElementById("box-game2");
let box3 = document.getElementById("box-game3");

imagen1.addEventListener('dragstart', arrastrado,false);
imagen2.addEventListener('dragstart', arrastrado,false);
imagen3.addEventListener('dragstart', arrastrado,false);

box1.addEventListener('dragenter', function(e){
    e.preventDefault()}, false);
box1.addEventListener('dragover', function(e){
    e.preventDefault();}, false);
box1.addEventListener('drop', soltado, false);

box2.addEventListener('dragenter', function(e){
    e.preventDefault()}, false);
box2.addEventListener('dragover', function(e){
    e.preventDefault();}, false);
box2.addEventListener('drop', soltado, false);

box3.addEventListener('dragenter', function(e){
    e.preventDefault()}, false);
box3.addEventListener('dragover', function(e){
    e.preventDefault();}, false);
box3.addEventListener('drop', soltado, false);

function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    let transfer=e.dataTransfer.getData('Text');
    let imagen = document.getElementById(transfer);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="290px">';
}
}
function reiniciar(){
    window.location.reload();
}