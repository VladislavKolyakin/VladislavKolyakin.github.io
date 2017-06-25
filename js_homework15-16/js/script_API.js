(function() {
   'use strict';
   $('.container').hide();
   $('#searchInput').keydown(function(event){
       if(event.keyCode==13)
          {
            searchPhoto()
             return false;
          }
   })
   $('#searchButton').click(searchPhoto)
    function searchPhoto() {
      var API_KEY = '5668477-37b49962aef47fa82b82759a3';
      var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent($('#searchInput').val());
      $.getJSON(URL, function(data) {
         if (parseInt(data.totalHits) > 0)
          { $.each(data.hits, function(i, hit) {
               if (i < 10) {
                  var z = '.' + 'photo' + i;
                  $(z).attr('src', hit.previewURL);
               }
               });
         $('.container').show();
         } else {
            console.log('No hits');
         }
      });
}
})();
