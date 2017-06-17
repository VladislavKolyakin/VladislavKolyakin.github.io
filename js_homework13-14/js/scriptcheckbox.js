
//$(function() {
   'use strict';
   var  $textLabelCheckbox1 = 'Билет';
   var  $textLabelCheckbox2 = 'Страховка';
   var  $textLabelCheckbox3 = 'Гостиница';

   $('label[for="Checkbox1"]')[0].lastChild.nodeValue = $textLabelCheckbox1;
   $('label[for="Checkbox2"]')[0].lastChild.nodeValue = $textLabelCheckbox2;
   $('label[for="Checkbox3"]')[0].lastChild.nodeValue = $textLabelCheckbox3;

    // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
    $( '.checkboxJs').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop('checked')) $(this).addClass('checkActive');
        if(checkbox.prop('disabled')){
         if(checkbox.prop('checked')) {$(this).addClass('checkDisabledActive');
         }else{$(this).addClass('checkDisabled');}

}
    });

    // при клике по диву, делаем проверку
    $('.checkboxJs').click(function(){
      console.log('click');
        var checkbox = $(this).find('input[type=checkbox]');
        // если чекбокс был активен
        if(checkbox.prop('checked')){
            // снимаем класс с родительского дива
            $(this).removeClass('checkActive');
            // и снимаем галочку с чекбокса'
            checkbox.prop('checked', false);
        // если чекбокс не был активен
        }else{
            // добавляем класс родительскому диву
            $(this).addClass('checkActive');
            // ставим галочку в чекбоксе
            checkbox.prop('checked', true);
        }
//    });

});
