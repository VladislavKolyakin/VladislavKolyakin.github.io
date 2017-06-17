(function() {
   'use strict';
   var test = {
      data: {
         title: 'Тест по какой-то теме',
         questions: [{
               title: 'Результат 2 x 2',
               answers: ['Больше 1', 'Больше 10', 'Меньше 0'],
               correctAnswer: [true, true, false]
            },
            {
               title: 'Результат 100 - 100',
               answers: ['Зеленый цвет', 'Равно 0', 'Целое число', 'Дробное число'],
               correctAnswer: [false, true, true, false]
            },
            {
               title: 'Результат 6 + 6',
               answers: ['Больше 10', 'Больше 1'],
               correctAnswer: [true, true]
            },
            {
               title: 'Как зовут Наташу?',
               answers: ['Таня', 'Маня', 'Надя', 'Оля', 'Клеопатра'],
               correctAnswer: [false, false, false, false, false]
            }
         ]
      }
   };
   var testStr = JSON.stringify(test);
   localStorage.setItem('test', testStr);
   })();
