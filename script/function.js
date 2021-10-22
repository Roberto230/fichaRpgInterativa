$(function(){



$('.btn_enviar').click(function(){ // COPIAR DADOS DA FICHA E PASSAR PARA OUTRA
    var ficha = $('.fichaPlayer');
    var atributos = 'Nome: ' + $('.name_player input[name=nome]').val() + '<br>'+
    '<hr>ATK: ' + $('input[name=atk]').val() + 
    'DEF: ' + $('input[name=def]').val() + 
    'FOR: ' + $('input[name=atk]').val() + '<br>'+
    'DEX: ' + $('input[name=dex]').val() + 
    'AGL: ' + $('input[name=agl]').val() + 
    'AST: ' + $('input[name=ast]').val() + '<br>'+
    'DFM: ' + $('input[name=dfm]').val();

  
    ficha.html(atributos);
    console.log('ficha colada');
    $('.form_ficha').fadeOut(1000,function(){
        console.log('edição desapareceu');
        ficha.fadeIn(1000,function(){
            console.log('ficha apareceu');
        });
        
    });
    
    return false;
});
$('.btn_editar').click(function(){ // FUNÇÃO DO BOTÃO EDITAR
    $('.fichaPlayer').fadeOut(1000,function(){
        console.log('ficha desapareceu');
        $('.form_ficha').fadeIn(1000,function(){
            console.log('edição apareceu');
        });
       
    });
    return false;
});

$('input[name=def]').click(function(){
    $('.teste .teste_life').css('width','')+1;
});

});