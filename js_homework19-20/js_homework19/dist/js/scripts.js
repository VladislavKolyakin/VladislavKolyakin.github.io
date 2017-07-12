'use strict';

$(document).ready(function () {
   $('.slider').each(function () {
      // обрабатываем каждый слайдер
      var obj = $(this);
      $(obj).append('<div class="nav"></div>');
      $(obj).find('li').each(function () {
         $(obj).find('.nav').append('<span rel="' + $(this).index() + '"></span>');
         //$(obj).find('.nav').append("<span rel='"+$(this).index()+"'></span>");
         $(this).addClass('slider' + $(this).index());
      });
      $(obj).find('span').first().addClass('on'); // делаем активным первый элемент меню
   });
});
function sliderJS(obj, sl) {
   // slider function
   var ul = $(sl).find('ul'); // находим блок
   var bl = $(sl).find('li.slider' + obj); // находим любой из элементов блока
   var step = $(bl).width(); // ширина объекта
   $(ul).animate({
      marginLeft: '-' + step * obj
   }, 500); // 500 это скорость перемотки
}
$(document).on('click', '.slider .nav span', function () {
   // slider click navigate
   var sl = $(this).closest('.slider'); // находим, в каком блоке был клик
   $(sl).find('span').removeClass('on'); // убираем активный элемент
   $(this).addClass('on'); // делаем активным текущий
   var obj = $(this).attr('rel'); // узнаем его номер
   sliderJS(obj, sl); // слайдим
   return false;
});
$('button').click(function () {
   console.log($('.search input').val());
   $('.search input').val('');
});

var nameBlocks = {
   data: [{ nameBlock: 'Power Inside',
      path: 'setting.svg',
      textBlock: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.'
   }, { nameBlock: 'New Technologies',
      path: 'params.svg',
      textBlock: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.'
   }, { nameBlock: 'Fast Support',
      path: 'truck.svg',
      textBlock: 'Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.'
   }]
};
var parent = document.getElementById('article');
var htmlNameBlock = document.getElementById('templateNameBlock').textContent;
//console.log(htmlNameBlock);
var templateNameBlock = _.template(htmlNameBlock);
//console.log(parent.innerHTML);
parent.innerHTML += templateNameBlock(nameBlocks.data);
//console.log(parent.innerHTML);
$('.nameBlockRead').click(function () {
   $(this).prev().css('overflow', 'visible');
   $(this).hide();
   $(this).next().show();
});
$('.hidde').click(function () {
   $(this).prev().prev().css('overflow', 'hidden');
   $(this).prev().show();
   $(this).hide();
});
$('.ourServices a').mouseenter(function () {
   $(this).find('img').css('opacity', '0.2');
});
$('.ourServices a').mouseleave(function () {
   $(this).find('img').css('opacity', '1.0');
});
var latesNews = {
   data: [{
      title: 'Advanced Machinery Helps Improve Quality',
      image: 'news1.png',
      month: 'Jan',
      day: '23',
      autor: 'cmsmasters',
      comments: '6',
      text: 'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.'
   }, { title: 'Powerful Techniques for Advanced Service',
      image: 'news2.png',
      month: 'Jan',
      day: '21',
      autor: 'cmsmasters',
      comments: '3',
      text: 'Cum sociis natoque penatibus et magnis dis parturient ontesmus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur samomo enim ipsam voluptatem.'
   }]
};
var parentLatesNews = document.getElementById('latesNews');
var htmlLatesNews = document.getElementById('templateLatesNews').textContent;
var templateLatesNews = _.template(htmlLatesNews);
parentLatesNews.innerHTML += templateLatesNews(latesNews.data);
var banners = {
   data: [{
      panel: '1',
      text: 'Cum sociis natoque penatibus et magnis dis parturient mus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur momo. Cum sociis natoque penatibus et magnis dis parturient ontesmus. Nemo enim ipsam voluptatem quia ptas sit aspernatur samomoPro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur '
   }, {
      panel: '2',
      text: 'Cum sociis natoque penatibus et magnis dis parturient mus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur momo. Cum sociis natoque penatibus et magnis dis parturient ontesmus. Nemo enim ipsam voluptatem quia ptas sit aspernatur samomoPro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur '
   }, {
      panel: '3',
      text: 'Cum sociis natoque penatibus et magnis dis parturient mus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur momo. Cum sociis natoque penatibus et magnis dis parturient ontesmus. Nemo enim ipsam voluptatem quia ptas sit aspernatur samomoPro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur '
   }, {
      panel: '4',
      text: 'Cum sociis natoque penatibus et magnis dis parturient mus. Pro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur momo. Cum sociis natoque penatibus et magnis dis parturient ontesmus. Nemo enim ipsam voluptatem quia ptas sit aspernatur samomoPro vel nibh et elit mollis commodo et nec augueique Nemo enim ipsam voluptatem quia ptas sit aspernatur '
   }]
};
var parentBanners = document.getElementById('banners');
var htmlBanners = document.getElementById('templateBanners').textContent;
var templateBanners = _.template(htmlBanners);
parentBanners.innerHTML += templateBanners(banners.data);
$('.panelText').hide();
$('.banners__activ').click(function () {
   var $panelText = $(this).closest('li').find('.panelText');
   var $accordPanel = $(this).next();
   if ($(this).hasClass('activPanel')) {
      $(this).html('&#10010;');
      $(this).removeClass('activPanel');
      $accordPanel.removeClass('activPanel');
      $panelText.hide();
   } else {
      $('.panelText').hide();
      $('.banners__activ').removeClass('activPanel');
      $('.banners__panel').removeClass('activPanel');
      $(this).addClass('activPanel');
      $accordPanel.addClass('activPanel');
      $panelText.show();
      $('.banners__activ').html('&#10010;');
      $(this).html('&mdash;');
   }
});

var linkFooter = {
   data: [{ name: 'SOCIAL',
      link: ['Facebook', 'Flickr', 'Twitter', 'Vimeo']
   }, { name: 'LINKS',
      link: ['How to Write a Blog', 'Create a Blog in 4 Steps', '15 Tips to Increase Traffic', '20 Blog Post Ideas']
   }, { name: 'BLOGROLL',
      link: ['Blogs Blog', 'Roll Up Roll Up', 'Blog Free', 'Wordpress Blog']
   }, { name: 'ABOUT US',
      link: ['Agriculture', 'Harvest', 'Company news', 'Investor relations']
   }]
};
var footer = document.getElementById('footer__menu');
var htmlFooter = document.getElementById('templateFooter').textContent;
var templateFooter = _.template(htmlFooter);
footer.innerHTML += templateFooter(linkFooter.data);