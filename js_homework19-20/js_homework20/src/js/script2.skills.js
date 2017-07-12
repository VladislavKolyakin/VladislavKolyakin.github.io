'use strict';
   // Массив скиллов
var newSkills = [];
_.forEach(myData,function(skills){
   newSkills = _.union(newSkills,skills.skills);
});
var sortSkills = newSkills.sort(function(a,b) {
  return a.localeCompare(b);
});
console.log('sortSkills = ',sortSkills );
alert('В консоли отсортированые массивы')
