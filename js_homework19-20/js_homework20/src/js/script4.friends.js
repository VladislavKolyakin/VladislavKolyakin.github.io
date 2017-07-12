
   'use strict';
   //Массив всех друзей всех пользователей
var newFriends = [];
var tempFriends =[];
_.forEach(myData,function(friends){
   var objectFriends = friends.friends;
      _.forEach(objectFriends,function(name){
      tempFriends[tempFriends.length] = name.name;
      newFriends =_.union(newFriends,tempFriends);
         });
});
console.log('Friends = ',newFriends)
