$('#ad-text').keydown(function() {
    if (event.which == 13 || event.keyCode == 13) {
        inviomessaggio();
    }
});


// ****FUNZIONI****

function inviomessaggio(){
    var valore = $('#ad-text').val();
    var clone = $('.template .message').clone();
    clone.addClass('sent');
    clone.find('.message-text').append(valore);
    clone.find('.message-time').append(timeMessage);
    $('.chat').append(clone);
    setTimeout(rispostaAutomatica,2000);
};

function rispostaAutomatica() {
    var clone2 = $('.template .message').clone();
    clone2.addClass('received');
    clone2.find('.message-text').append('Ok');
    clone2.find('.message-time').append(timeMessage);
    $('.chat').append(clone2);

}

function timeMessage() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return h + ":" + m;
};

$('.cont-1').on('click',hoverContact);

function hoverContact() {
    $('.cont-1').removeClass('active');
    $(this).addClass('active');
}
