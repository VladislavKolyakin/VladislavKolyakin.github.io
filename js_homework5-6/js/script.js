(function() {
   'use strict';

   function fClock() {
      if (start.value === 'START') {
         start.value = 'PAUSE';
         start.style.backgroundColor = '#3a8cdc'
         timeStart = Date.now();
         intervalID = setInterval(initMs, 1);
      } else {
         start.value = 'START';
         start.style.backgroundColor = '#3ad93c'
         clearInterval(intervalID);
         stopTimerMs = myTimerMs;
      }
   }

   function initMs() {
      var timeNow = Date.now();
      var timeDiffMs = ((timeNow - timeStart));
      myTimerMs = +stopTimerMs + timeDiffMs;
      timerMs.value = myTimerMs;
      var second = Math.floor(myTimerMs / 1000);
      var dispSec = second % 60;
      if (dispSec < 10) dispSec = '0' + dispSec;
      var minute = Math.floor(second / 60);
      var dispMin = minute % 60;
      if (dispMin < 10) dispMin = '0' + dispMin;
      var dispHour =  Math.floor(minute / 60);
      if (dispHour < 10) dispHour = '0' + dispHour;
      timerMs.value = (myTimerMs % 1000);
      timers.value = dispHour + ':' + dispMin + ':' + dispSec
   }

   function fClear() {
      clearInterval(intervalID);
      stopTimerMs = 0;
      timerMs.value = '000';
      timers.value = '00:00:00';
      start.value = 'START';
   }
   
   var intervalID;
   var stopTimerMs = 0;
   var myTimerMs;
   var timeStart;
   var timers = document.getElementById('timers');
   var timerMs = document.getElementById('timerms');
   var start = document.getElementById('start');
   var clear = document.getElementById('clear');
   timerMs.value = '000';
   timers.value = '00:00:00';
console.log(start.style.backgroundColor)
   start.value = 'START';
   start.addEventListener('click', fClock);
   clear.value = 'CLEAR';
   clear.addEventListener('click', fClear);

})();
