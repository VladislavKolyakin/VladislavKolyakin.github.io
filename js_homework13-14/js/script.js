(function() {
   'use strict';
   var test = localStorage.getItem('test');
   test = JSON.parse(test);
   var parent = document.getElementById('container');
   var html = document.getElementById('template').textContent;
   var template = _.template(html);
   parent.innerHTML += template(test);
      $(function() {
            $('.checkboxJs').click(function() {
         $('.checkboxJs').each(function() {
            var checkbox = $(this).find('input[type=checkbox]');
            if (checkbox.prop('checked')) $(this).addClass('checkActive');
            });
         var checkbox = $(this).find('input[type=checkbox]');
         if (checkbox.prop('checked')) {
            $(this).removeClass('checkActive');
            checkbox.prop('checked', false);
         } else {
            $(this).addClass('checkActive');
            checkbox.prop('checked', true);
         }

      });
      $('.submit').click(function() {
         var buttonSubmit = $('.submit').attr('value');
         if (buttonSubmit === 'Проверить результат') {
            var numQuestion = 0;
            var errors = 0;
            _.forEach(test.data.questions, function(title) {
               numQuestion++;
               var numAnswer = 0;
               _.forEach(title.correctAnswer, function(correctAnswer) {
                  numAnswer++;
                  var currentId = 'q' + numQuestion + 'v' + numAnswer;
                  var divParent = document.getElementById(currentId).parentElement.parentElement;
                  if ((divParent.classList.contains('checkActive')) === correctAnswer) {
                     divParent.classList.remove('checkRed');
                  } else {
                     divParent.classList.add('checkRed');
                     errors++;
                  }
               });
            });
            $('.reportError').text('Количество ошибок: ' + errors);
            $('.submit').attr('value', 'Сброс');
            $('#modal_form') //открытие модального окна
               .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
               .animate({
                  opacity: 1,
                  top: '35%'
               }, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo двигaем oкнo
            // Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке
            $('#modal_close, #overlay').click(function() { // лoвим клик пo крестику
               $('#modal_form')
                  .animate({
                        opacity: 0,
                        top: '45%'
                     }, 200, // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo
                     function() { // пoсле aнимaции
                        $(this).css('display', 'none'); // делaем ему display: none;
                     });
            });
         } else {
            $('div').removeClass('checkRed checkActive');
            $('input[type=checkbox]').prop('checked', false);
            $('.submit').attr('value', 'Проверить результат');
            $('#modal_form').css('display', 'none');
         }
      });
   });
})();
