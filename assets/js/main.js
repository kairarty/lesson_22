function scrollToTop() {
    $(window).scrollTop(0);
}

function scrollToElement() {
    $("#bottom").get(0).scrollIntoView();
}

$(document).ready(function(){
    $('.btn-spoiler').click(function(){ // при клике по заголовку спойлера
        var show = $(this).attr('show'); // проверяем атрибут, в котором записано - отображен спойлер или скрыт
        if(show == 1){ // если отображен, то прячем
            $(this).attr('show', 0);
            $(this).next('.spoiler-text').slideUp(300);
        }else{ // если спрятан, то показываем
            $(this).attr('show', 1);
            $(this).next('.spoiler-text').slideDown(300);
        }
    });
});
