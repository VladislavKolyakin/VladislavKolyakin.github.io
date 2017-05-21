(function () {
'use strict';
var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3']
      },
      {
        title: 'Вопрос №2',
        answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант ответа 1', 'Вариант ответа 2']
     },
     {
     title: 'Вопрос №4',
     answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4', 'Вариант ответа 5']
  }
    ]
  }
};

var attributesForm = [
   {
      name: 'action',
   value: 'index.html'
},
{
   name: 'method',
value: 'get'
}
];
var attributesInput = [
   {
      name: 'type',
   value: 'radio'
}
];

var attributesSubmit = [
   {
      name: 'type',
   value: 'submit'
   },
   {
   name: 'value',
   value: ' Проверить мои результаты'
   }
];

function  articleHead (article) {
    'use strict';
var header = document.createElement('h2');
header.appendChild(document.createTextNode(article.data.title));
return header;
}

function createNode(type, cls, attributes, str) {
  'use strict';
  var el = document.createElement(type);
  if (cls && (typeof cls === 'string')) {
    el.classList.add(cls);
  }
  if (attributes && (typeof attributes === 'object')) {
    for (var i = 0; i < attributes.length; i++) {
      el.setAttribute(attributes[i].name, attributes[i].value);
    }
  }
  if (str && (typeof str === 'string')) {
    el.appendChild(document.createTextNode(str));
  }
  return el;
}


var root = document.getElementById('root');
root.appendChild(articleHead (test));
var tegForm = createNode('form', 'test', attributesForm, null);
root.appendChild(tegForm);
var olTag = createNode('ol',null, null, null);
tegForm.appendChild(olTag)
for (var i = 0; i < test.data.questions.length; i++) {
      var olLi = createNode('li', test, null, test.data.questions[i].title);
   olTag.appendChild(olLi);
   var ulTag = document.createElement('ul');
   olLi.appendChild(ulTag);
   for (var k = 0; k < test.data.questions[i].answers.length; k++) {
      var ulLi = document.createElement('li');
      ulTag.appendChild(ulLi);
      var question = 'question' + (i + 1);
      var variant = 'variant' + (k + 1);
      var idVariant = 'q' + (i + 1) + 'v' + (k + 1);
      var inputTag = createNode('input', 'radio', attributesInput, null);
      inputTag.setAttribute('name', question);
      inputTag.setAttribute('value', variant);
      inputTag.setAttribute('id', idVariant);
      ulLi.appendChild(inputTag);
      var labelTag = document.createElement('label');
            labelTag.setAttribute('for', idVariant);
      labelTag.appendChild(document.createTextNode(test.data.questions[i].answers[k]));
      ulLi.appendChild(labelTag);

   }

}
var buttonSubmit = createNode('input', 'submit', attributesSubmit, null);
tegForm.appendChild(buttonSubmit);
})();
