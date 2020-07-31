$('#ad-text').keydown(function() {
    if (event.which == 13 || event.keyCode == 13) {
        inviomessaggio();
    }
});

$('.cont-1').on('click',hoverContact);

// ****FUNZIONI****

function inviomessaggio(){
    var valore = $('#ad-text').val();
    var clone = $('.template .message').clone();
    clone.addClass('sent');
    clone.find('.message-text').append(valore);
    clone.find('.message-time').append(timeMessage);
    $('.chat').append(clone);
    $('#ad-text').val('');
    setTimeout(rispostaAutomatica,1000);
};

function rispostaAutomatica() {
    var clone2 = $('.template .message').clone();
    clone2.addClass('received');
    clone2.find('.message-text').append('Ok');
    clone2.find('.message-time').append(timeMessage);
    $('.chat').append(clone2);

};

function timeMessage() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    return h + ":" + m;
};

function addZero(numero){
    if(numero < 10){
        return '0' + numero;
    }
    return numero;
};

function hoverContact() {
    $('.cont-1').removeClass('active');
    $(this).addClass('active');

    var img = $(this).find('img').attr('src');
    var name = $(this).find('.text-info h4').text();

    $('.up').find('img').attr('src', img);
    $('.up').find('.fix h4').text(name);
};
