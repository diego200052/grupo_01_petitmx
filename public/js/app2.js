window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    try{
        preload.classList.add('preload-finish');
        
    }catch(e){     
        window.onerror = function(){
            return true;
         }
    }

});

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.carousel').carousel();
    $('.slider').slider();
    $('.parallax').parallax();
    $('#textarea2').val('');
    try{
        M.textareaAutoResize($('#textarea2'));
    }catch(e){     
        window.onerror = function(){
            return true;
         }
    }
    
    
});

  