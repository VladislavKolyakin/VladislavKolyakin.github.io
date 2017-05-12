'use strict'
var array = ['user1', 'user2', 'user3', 'user4', 'user5']
var question = confirm('Создать новый массив пользователей?')
if (question) {
   array.length = 0
   for (var i = 0; i < 5; i++) {
      var l = i + 1
      array[i] = prompt('Введите имя пользователя', l)
         }
   }
   console.log(array)
var nameUser = prompt('Введите имя пользователя')
console.log(nameUser)
var result = 'Ошибка, нет такого пользователя!'
for (var i = 0, max = array.length; i < max; i++) {
   console.log(i, array[i] )
   if (array[i] == nameUser) {
      result = nameUser + ', Вы успешно вошли.'
      break
}
}
console.log(result)
alert (result)
