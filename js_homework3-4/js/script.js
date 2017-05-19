(function () {
  'use strict'
var h2Tag = document.createElement('h2');
h2Tag.appendChild(document.createTextNode('Тест по программированию'))
var container = document.createElement('form');
container.classList.add('test');
container.setAttribute('action', 'index.html');
container.setAttribute('method', 'post');
var olTag = document.createElement('ol');
for (var i = 1; i < 4; i++) {
var olLi = document.createElement('li');
 olLi.classList.add('quest' + i);
olLi.appendChild(document.createTextNode('Вопрос №' + i));
olTag.appendChild(olLi)
var ulTag = document.createElement('ul');
olLi.appendChild(ulTag)
for (var k = 1; k < 4; k++) {var ulLi = document.createElement('li');
var inputTag = document.createElement('input');
inputTag.classList.add('radio');
inputTag.setAttribute('type', 'radio');
var question = 'question' + i;
var variant = 'variant' + k;
var idVariant = 'q' + i + 'v' + k;
inputTag.setAttribute('name', question);
inputTag.setAttribute('value', variant);
inputTag.setAttribute('id', idVariant);
var labelTag = document.createElement('label');
labelTag.setAttribute('for', idVariant);
labelTag.appendChild(document.createTextNode(' Вариант ответа №' + k))
ulLi.appendChild(inputTag);
ulLi.appendChild(labelTag);
ulTag.appendChild(ulLi);
}
}
var buttonSubmit =  document.createElement('input');
buttonSubmit.classList.add('submit');
buttonSubmit.setAttribute('type', 'submit');
buttonSubmit.setAttribute('value', ' Проверить мои результаты');
root.appendChild(h2Tag);
root.appendChild(container)
container.appendChild(olTag);
container.appendChild(buttonSubmit);



//var form = document.getElementByClassName('test');

})()
