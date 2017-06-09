(function() {
   'use strict';
   $(function() {
      $( '.dropdown' ).hover(
        function(){
           $(this).children('.sub-menu').slideDown(200);
        },
        function(){
           $(this).children('.sub-menu').slideUp(200);
        }
     );
     $('.forjQuere').show();
    $('.forCss').hide();
     var glavnFirstParagraf = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non orci sed quam convallis condimentum. Sed a odio quis turpis tincidunt porta. Suspendisse ut posuere elit. Aliquam euismod, mi a elementum dignissim, nibh nibh malesuada tellus, id rhoncus elit quam vel est. Cras mattis feugiat purus, eu auctor elit pretium sit amet. In hac habitasse platea dictumst. Donec consectetur nisi vel turpis hendrerit, a dignissim sem varius. Donec consectetur erat eget mi sagittis, a auctor nisl vestibulum. Donec porttitor nibh et ante interdum tristique. Aliquam sed metus felis. Proin eu vehicula velit. Proin ut tortor ut est vulputate fringilla eget eu nisl. Integer aliquet semper ex, sed laoreet urna hendrerit id. Sed blandit, tellus nec sodales accumsan, ligula justo malesuada ligula, ac vulputate enim tortor eu tellus.';
      var glavnSecondParagraf = 'Phasellus sit amet facilisis lectus, sit amet hendrerit sem. Praesent at malesuada urna. Cras quis posuere nisl. Fusce ultricies hendrerit vestibulum. Maecenas non facilisis risus, id maximus tortor. Nullam facilisis sagittis nisl vel dictum. Proin pellentesque, ipsum sit amet vulputate imperdiet, odio quam maximus ligula, a egestas risus ligula vel lorem. Fusce ut mollis libero, sit amet venenatis nunc. Donec lacinia faucibus odio, sed bibendum dui vestibulum non. Praesent sed ornare est, ut hendrerit justo. Duis vitae viverra urna, id sollicitudin mi. Vivamus ac dui risus. Duis iaculis sodales ipsum, at auctor dui scelerisque non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
      var contactFirstParagraf = 'Pellentesque mattis ante nec est finibus mollis. In a magna quis purus faucibus placerat nec non ipsum. Sed a massa ac augue pulvinar placerat. Phasellus blandit egestas sem, scelerisque sagittis nibh condimentum efficitur. Aliquam est odio, sodales ac gravida quis, egestas sed neque. Morbi molestie ullamcorper nisi id egestas. Donec a efficitur est, in placerat odio. Nam luctus, diam non placerat rutrum, quam felis lacinia diam, ut vulputate erat odio id nisi. Fusce varius, mi non dapibus pellentesque, nulla ex porttitor nibh, vulputate vulputate sem libero molestie odio. Nulla facilisi. Mauris congue ac enim vitae suscipit. Cras est tellus, rhoncus id vulputate quis, varius et ipsum.';
      var contactSecondParagraf = 'Phasellus in ex sed enim bibendum interdum. Quisque pretium arcu lectus. Morbi dapibus, erat sed fermentum ornare, quam nunc suscipit quam, sed volutpat lacus velit in nibh. Sed vitae sodales eros. Nulla aliquet ligula convallis erat consectetur cursus. Nam at ex mi. Cras aliquam dui vel feugiat eleifend.';
      var $firstParagraf = $('.firstParagraf');
      var $secondParagraf = $('.secondParagraf');
            $firstParagraf[0].textContent = glavnFirstParagraf;
      $secondParagraf[0].textContent = glavnSecondParagraf;
      $('ul.menu  a').click(textOut);
      $('.galery a').click(photoOut);
        function textOut($event) {
        var $linkText = $event.currentTarget.innerText;
        if ($linkText === 'Главная') {
                 $firstParagraf[0].textContent = glavnFirstParagraf;
                 $secondParagraf[0].textContent = glavnSecondParagraf;
              }
              if ($linkText === 'Контакты') {
                      $firstParagraf[0].textContent = contactFirstParagraf;
                      $secondParagraf[0].textContent = contactSecondParagraf;
                   }
                   if ($linkText === 'Бронирование') {
                      $('.forjQuere').show();
                      $('.forCss').hide();
 }
if ($linkText === 'Гостиница') {
   $('.forjQuere').hide();
   $('.forCss').show();
 }
 }
 function photoOut($event){
    //console.log( $event.currentTarget.innerText)
    if($event.currentTarget.innerText === 'Париж'){

    $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'http://cita.com.ua/img/nhotels/4432/big/5422/553737618.jpg';
    $('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'http://avtotravel.com/Portals/0/activeforums_Attach/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2011-11-01_%D0%B2_16.49.36.png';
    $('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://avtotravel.com/Portals/0/activeforums_Attach/DSCF2336.gif';
    $('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'http://avtotravel.com/Portals/0/activeforums_Attach/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2011-11-01_%D0%B2_16.54.24.png';
    $('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'http://avtotravel.com/Portals/0/activeforums_Attach/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2011-11-01_%D0%B2_16.58.03.png';
}
if($event.currentTarget.innerText === 'Марсель'){
  $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'http://www.svoiludi.ru/images/tb/7734/marseli-iujnyi-kolorit-franzii-tur-13227438807372_w514h370.jpg';
$('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'http://franceska.ru/wp-content/uploads/2014/11/Marsel.jpg';
$('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://www.svoiludi.ru/images/tb/7734/marseli-iujnyi-kolorit-franzii-tur-13227438691725_w514h379.jpg';
  $('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'http://www.aquauna.ru/assets/images/programm/ekskursionnye-tury-otdyh/france-marsel/marsel02.jpg';
 $('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'http://www.svoiludi.ru/images/tb/7735/marseli-kulturnaia-stoliza-evropy-tur-1322744664853_w514h380.jpg';
}
  if($event.currentTarget.innerText === 'Замки Луары'){
    $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'https://weatlas.com/img/landmarks/00a7539807fa5f09ff6a5fb07c0c31f5.jpg';
  $('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'http://madamelavie.ru/wp-content/uploads/2012/06/01IMGP0201.jpg';
  $('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://estuki.com/uploads/posts/2016-11/1478282729_luara6.jpg';
    $('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'http://www.1000dorog.info/img/forall/Image/%D1%88%D0%B0%D0%BC%D0%B1%D0%BE%D1%80.jpg';
   $('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'http://img0.liveinternet.ru/images/attach/c/0/120/848/120848910_zamok_shambor_franciya_3.jpg';
 }
 if($event.currentTarget.innerText === 'Рим'){
   $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'http://2.bp.blogspot.com/_s8Ut847pbJo/TELQ9rJHhaI/AAAAAAAABK8/nTyMgqjVBtw/s640/_5706.jpg';
 $('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'https://travel.rambler.ru/media/original_images/54f490f62b135.jpg';
 $('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://www.shoppingkapriz.com/wp-content/uploads/2015/02/rome27.jpg';
   $('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'http://alievy.com.ua/wp-content/uploads/2013/04/%D0%A0%D0%B8%D0%BC-2.jpg';
  $('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'http://www.planetofhotels.com/blog/wp-content/uploads/Rim-panorama.jpg';
 }
 if($event.currentTarget.innerText === 'Венеция'){
   $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'https://www.meteoprog.ua/pictures/news_v_2/a4e1f0b46814a16e706aad6683a927f7.jpg';
 $('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'http://tourdesvit.com.ua/wp-content/uploads/2015/04/venezia-1-1.jpg';
 $('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://italy4.me/wp-content/uploads/2013/03/Kanal-Veneto-v-Venecii.jpg';
   $('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IbGY_2AxjPu2VqsG6NHXLTvdYgE4ATGyroUj_S96B-N51oAV';
  $('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-1C8R8QHGwf0pg5K1-1GLI-AMSuWjAKg-GklHV08VTNI_VmUYA';
}
if($event.currentTarget.innerText === 'Неаполь'){
   $('.jcarousel .photo1')['0'].attributes[1].nodeValue = 'http://web-tourism.ru/wp-content/uploads/2015/01/410.jpg';
$('.jcarousel .photo2')['0'].attributes[1].nodeValue = 'https://static.tonkosti.ru/images/6/6a/%D0%97%D0%B0%D0%BC%D0%BE%D0%BA_%D0%B2_%D0%9D%D0%B5%D0%B0%D0%BF%D0%BE%D0%BB%D0%B5%2C_%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F.jpg';
$('.jcarousel .photo3')['0'].attributes[1].nodeValue = 'http://orion-voyage.com.ua/images/tours_excur.1447689996.1.b.jpg';
$('.jcarousel .photo4')['0'].attributes[1].nodeValue = 'http://www.beefly.com.ua/UserFiles/Image/neapol.jpg';
$('.jcarousel .photo5')['0'].attributes[1].nodeValue = 'http://ic.pics.livejournal.com/kolllak/14380162/1448505/1448505_original.jpg';
}
}
var params = {
		changedEl: ".lineForm select",
		visRows: 5,
		scrollArrows: true
	}

	cuSel(params);


          // проверяем, какие чекбоксы активны и меняем сласс для родительского дива
          $( '.checkboxJs').each(function(){
              var checkbox = $(this).find('input[type=checkbox]');

              if(checkbox.prop('checked')) $(this).addClass("checkActive");
              if(checkbox.prop('disabled')){
               if(checkbox.prop('checked')) {$(this).addClass("checkDisabledActive");
               }else{$(this).addClass('checkDisabled');}

      }
          });

          // при клике по диву, делаем проверку
          $('.checkboxJs').click(function(){
              var checkbox = $(this).find('input[type=checkbox]');
              // если чекбокс был активен
              if(checkbox.prop('checked')){
                  // снимаем класс с родительского дива
                  $(this).removeClass('checkActive');
                  // и снимаем галочку с чекбокса
                  checkbox.prop('checked', false);
              // если чекбокс не был активен
              }else{
                  // добавляем класс родительскому диву
                  $(this).addClass('checkActive');
                  // ставим галочку в чекбоксе
                  checkbox.prop('checked', true);
              }
      });
});

})();
