$(function() {
    'use strict';

    $('#btnUnirseMobile').click(function(e) {
        location.href = 'mobileconference.html?roomId=' + encodeURI("roomparamedicshaman") + '&chatId=' + encodeURI("chatparamedicshaman") + '&sala=' + encodeURI("paramedic");
    });

    $('#btnUnirseWeb').click(function(e) {
        location.href = 'webconference.html?roomId=' + encodeURI("roomparamedicshaman") + '&chatId=' + encodeURI("chatparamedicshaman") + '&alta=' + encodeURI("0");
    });

    $('#btnUnirseWebAlta').click(function(e) {
        location.href = 'webconference.html?roomId=' + encodeURI("roomparamedicshaman") + '&chatId=' + encodeURI("chatparamedicshaman") + '&alta=' + encodeURI("1");
    });

    $('#btnUnirseWebNormal').click(function(e) {
        location.href = 'webconference.html?roomId=' + encodeURI("roomparamedicshaman") + '&chatId=' + encodeURI("chatparamedicshaman") + '&alta=' + encodeURI("3");
    });
});