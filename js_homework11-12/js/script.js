(function(){
'use strict';
var photo = [
      {
         city:"Киев.",
   name: " Памятник основателям",
   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ScJB0w-Et4NyGmoCt2GmsmdoTuDM-FhvlXaSXvmtxr1qj9PO0A"
},
{
   city:"Киев",
   name: "Вечерний город",
   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbreOv3PyUzkpMfYIVGZUQHRcs3fOhCmUmIciOc4HzOdiIkt3"
},
{
   city:"Киев.",
   name:"Ботанический сад.",
   src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilRdv-IxWdXndqpj6kqBunSZdmNpv98ZCjIUBwlVgVAM55y1t5g",
},
{
   city:"Киев.",
   name:"Дом с химерами.",
   src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8QmuEMq3i66-XvxyU3BoLaNakignwHWZpapHUO1aKcqNOhJU"
},
{
   city:"Париж.",
   name:"Трокадеро.",
   src:'http://cita.com.ua/img/nhotels/4432/big/5422/553737618.jpg'
},
{
   city:"Марсель",
   name:"",
   src:"http://franceska.ru/wp-content/uploads/2014/11/Marsel.jpg"
},
{
   city:"Рим.",
   name:"Капитолий.",
   src:"http://2.bp.blogspot.com/_s8Ut847pbJo/TELQ9rJHhaI/AAAAAAAABK8/nTyMgqjVBtw/s640/_5706.jpg"
},
{
   city:"Париж.",
   name: "Сакре-кер",
   src:"http://avtotravel.com/Portals/0/activeforums_Attach/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2011-11-01_%D0%B2_16.58.03.png"
}
];
var parent = document.getElementById('container');
 var html = document.getElementById('photo').textContent;
 console.log(html);
 var template = _.template(html);
 _.forEach(photo, function (city){
       parent.innerHTML += template(city);
});
 $(function() {
       $('.carousel').mycarousel();
});
})();
