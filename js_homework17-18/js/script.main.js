(function() {
   'use strict';
   var root = document.getElementById('root');
   var div = document.createElement('div');
   div.className = 'div1';
   var p = document.createElement('p');
   p.innerHTML = 'Блок1';

   root.appendChild(div);
    div.appendChild(p);
})();
;(function() {
   'use strict';
   var root = document.getElementById('root');
   var div = document.createElement('div');
   div.className = 'div2';
   var p = document.createElement('p');
   p.innerHTML = 'Блок2';
   root.appendChild(div);
    div.appendChild(p);
})();
