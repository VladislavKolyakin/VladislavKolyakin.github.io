
   'use strict';
   //Массив имен (поле name)
var newName =[];
_.forEach(myData,function(name){
   newName[newName.length] =  {'nname':name.name,'nfriends':  _.size(name.friends)};
      });
   newName = _.sortBy(newName,'nfriends');
   newName = newName.reverse();
   _.forEach(newName,function(nname){
console.log(nname.nname, ' имеет ',nname.nfriends, ' друзей.' );
});
