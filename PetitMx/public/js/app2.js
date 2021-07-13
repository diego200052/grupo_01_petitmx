window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    $('#textarea2').val('');
    M.textareaAutoResize($('#textarea2'));
    
});

  