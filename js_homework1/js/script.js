'use strict'
var resultat
var inputData = prompt('Введите число (оно должно быть целым)', 0)
var dataNamber = +inputData
if (isNaN(dataNamber)) alert(inputData + ' это не число')
else if (dataNamber % 1 !== 0) alert(inputData + ' это не целое число')
else {
   inputData = prompt('Введите степень (она должна быть целым числом)', 0)
   var exponent = +inputData
   if (isNaN(exponent)) alert(inputData + ' это не число')
   else if (exponent % 1 !== 0) alert(inputData + ' это не целое число')
   else {
      resultat = pow(dataNamber, exponent)
      console.log('resultat=', resultat)
      alert(dataNamber + ' в степени ' + exponent + ' = ' + resultat)
   }
}

function pow(dataNamber, exponent) {
   var result
   if ((dataNamber == 0) && (exponent == 0)) result = 'Значение не определено'
   else if ((dataNamber !== 0) && (exponent == 0)) result = 1
   else {
      if (exponent > 0) var exponentPlus = exponent
      else exponentPlus = -exponent
      result = dataNamber
      for (var i = 1; i < exponentPlus; i++) {
         result = result * dataNamber
      }
      if (exponent < 0) result = 1 / result
   }
  return result
}
