var linkFooter = {
data:[
   {name: 'SOCIAL',
   link: ['Facebook','Flickr','Twitter','Vimeo'],
   },
   {name: 'LINKS',
   link: ['How to Write a Blog','Create a Blog in 4 Steps','15 Tips to Increase Traffic','20 Blog Post Ideas'],
   },
   {name: 'BLOGROLL',
   link: ['Blogs Blog','Roll Up Roll Up','Blog Free','Wordpress Blog'],
   },
   {name: 'ABOUT US',
   link: ['Agriculture','Harvest','Company news','Investor relations'],
   },
],
};
var footer = document.getElementById('footer__menu');
var htmlFooter = document.getElementById('templateFooter').textContent;
var templateFooter = _.template(htmlFooter);
 footer.innerHTML += templateFooter(linkFooter.data);
