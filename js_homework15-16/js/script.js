(function() {
   'use strict';
   var Test = function() {
       this.data = {
                  title: '',
                  questions: []
               };
         };
   var numQuestion;
   var numsAnswers = [];
   var checkRadio;

   $('#constrQuestion').keyup(function(event) {
      if (event.keyCode === 13) {
         constrQuestion();
      }
      return false;
   });
   $('#constrQuestion').click(constrQuestion);
   function constrQuestion() {
      if (!$('#numbAnswers1').length) {
         var regV = /[1-9]+/;
         if (regV.test($('#constrQuestion').val())) {
            numQuestion = $('#constrQuestion').val();
            for (var i = 1; i <= numQuestion; i++) {
               $('<label for="numbAnswers' + i + '">Сколько будет ответов в вопросе №' + i + ' ?</label>').appendTo($('.constrAnswers'));
               $('<input type="text" name="" value="" id="numbAnswers' + i + '"><br/>').appendTo($('.constrAnswers'));
            }
         $('input').keyup(keyEnter);
         }
      }
   }
   $('.resetConstruktor').click(function() {
      $('div.constrAnswers').empty();
      $('#constrQuestion').val('');
   });

   $('.submitConstruktor').click(function() {
      var $inputConstruktor = $('.constrAnswers input');
      var verify = ($('#numbAnswers1').length);
      $inputConstruktor.each(function() {
         var regV = /[1-9]+/;
         if (!regV.test($(this).val())) {
            $(this).attr('class', 'red');
         } else {
            $(this).attr('class', '');
         }
         verify = verify && (regV.test($(this).val()));
      });

      if ($('#myRadio').prop('checked')) {
         checkRadio = 'radio';
      } else {
         checkRadio = 'checkbox';
      }
      if (verify) {
         for (var i = 0; i < numQuestion; i++) {
            var idAns = '#numbAnswers' + (i + 1);
            numsAnswers[i] = Number($(idAns).val());
         }
         if ($('#numbAnswers1').length) {
            $('.constrTest').hide();
         }
         //Создание теста
         var stringTest = '<ol>';
         $('.inputTest').append('<input type="text" id="titleTest" value="" placeholder="введите название теста">');
         for (var l = 0; l < numQuestion; l++) {
            var substrQuestion = '<li><input  type="text" class="question" id="question' + (l + 1) + '" value="" placeholder="введите вопрос"><ul>';
            for (var m = 1; m <= numsAnswers[l]; m++) {
               var substrAnswer = '<li><input  type="text" id="q' + (l + 1) + 'answer' + m + '" value="" placeholder="введите вариант ответа"><input  type=checkRadio name="q' + (l + 1) + '" id="q' + (l + 1) + 'v' + m + '" value="" ></li>';
               substrQuestion = substrQuestion + substrAnswer;
            }
            substrQuestion = substrQuestion + '</ul>';
            stringTest = stringTest + substrQuestion;
         }
         stringTest = stringTest + '</ol>';
         stringTest = stringTest + '<button type="button" class="resetTest" name="button">Сброс</button><button type="button" class="submitTest" name="button">Применить</button>';
         stringTest = stringTest + '<p>Отметьте правильные ответы</p>';
      }
      $('.inputTest').append(stringTest);
       $('input[type=checkRadio]').attr('type', checkRadio);
$('input').keyup(keyEnter);
      $('.resetTest').click(function() {
         $('.inputTest input').val('');
         $('.inputTest input:checked').prop('checked', false);
      });
      $('.submitTest').click(function() {
               var test = new Test();
               test.data.title = $('#titleTest').val();
         for (var n = 0; n < numQuestion; n++) {
            var idQ = '#question' + (n + 1);
            var answ = [];
            var corrAnsw = [];
            for (var m = 0; m < numsAnswers[n]; m++) {
               var idA = '#q' + (n + 1) + 'answer' + (m + 1);
               answ[m] = $(idA).val();
               var idCorrA = '#q' + (n + 1) + 'v' + (m + 1);
               corrAnsw[m] = ($(idCorrA).prop('checked'));
            }
            test.data.questions[n] = {
               title: $(idQ).val(),
               answers: answ,
               correctAnswer: corrAnsw
            };
         }
         var testStr = JSON.stringify(test);
         localStorage.setItem('test', testStr);
         alert('Объект "test" был сохранен в Local Storage,   проверить:                        https://vladislavkolyakin.github.io/js_homework13-14/')
      });
   });

   function keyEnter() {
      if (event.keyCode === 13) {
         var $next = $('input').eq($('input').index(this) + 1);
         $next.focus();
         event.preventDefault();
      }
   }


})();
