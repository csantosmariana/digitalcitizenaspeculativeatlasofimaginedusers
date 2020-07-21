// MENU & ABOUT MODAL BOXES

// Obtem o modal
var modal = document.getElementById("about_box");
var modalx = document.getElementById("menu_box");

// Obtém o botão que abre o modal
var btn = document.getElementById("about_button");
var btnx = document.getElementById("menu_button");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close_a")[0];
var spanx = document.getElementsByClassName("close_m")[0];

var spany = document.getElementsByClassName("buttons")[0];

// Ao clicar no botão abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

btnx.onclick = function() {
  modalx.style.display = "block";
}

// Ao clicar <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

spanx.onclick = function() {
  modalx.style.display = "none";
}

spany.onclick = function() {
  modalx.style.display = "none";
}

// Ao clicar em qualquer sítio fora a conteúdo do modal fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modalx) {
    modalx.style.display = "none";
  }
}


// SINOPSES

//clicar em sinopse pt

$('.sinopse_pt_button').click(
                function(){
                    $('#sinopse_en').css('display', 'none')
                },             
 );
 $('.sinopse_pt_button').click(
                function(){
                    $('#sinopse_pt').css('display', 'block')
                },             
 );


//clicar em sinopse en
 $('.sinopse_en_button').click(
                function(){
                    $('#sinopse_en').css('display', 'block')
                },             
 );
 $('.sinopse_en_button').click(
                function(){
                    $('#sinopse_pt').css('display', 'none')
                },             
 );



