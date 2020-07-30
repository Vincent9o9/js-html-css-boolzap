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
    clone.find('.message-time').append('16:40');
    $('.chat').append(clone);
    // setTimeout(rispostaAutomatica,2000);
};
