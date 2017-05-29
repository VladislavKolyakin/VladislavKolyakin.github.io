(function() {
   'use strict';
   $(function() {
      //DOM
      $('#root').append('<div class="tabs"></div>');
      $('.tabs').append('<ul></ul>');
      $('ul').append('<li id="tabs1" tabindex="1" ><a  href="#tabs1" tabindex="-1">Nunc tincidunt</a></li>');
      $('ul').append('<li id="tabs2" tabindex="2"><a  href="#tabs2" tabindex="-1">Proin dolor</a></li>');
      $('ul').append('<li id="tabs3" tabindex="3"><a  href="#tabs3" tabindex="-1">Aenean lacinia</a></li>');
      $('.tabs').append('<p class="firstParagraf"></p><p class="secondParagraf" ></p>');
      $('#root').append('<div class="forms"></div>');
      $('.forms').append('<form><fieldset></fieldset></form><button type = "button" tabindex="0" >Show help</button>');
      $('fieldset').append('<div><label for="firstname">Firstname</label><input id="firstname"  name="firstname"  tabindex="4" data-tooltip="Please provide your firstname."></div>');
      $('fieldset').append('<div><label for="lastname">Lastname</label><input id="lastname"  name="lastname" tabindex="5" data-tooltip="Please provide your lastname."></div>');
      $('fieldset').append('<div><label for="address">Address    </label><input id="address"  name="address" tabindex="0" data-tooltip="Your home or work address."></div>');
      $('fieldset').append('<div id="tooltip" tabindex="-1" ></div>');
      $('fieldset').append('<div id="firstnameHelp" ></div>');
      $('fieldset').append('<div id="lastnameHelp" ></div>');
      $('fieldset').append('<div id="addressHelp" ></div>');
      //css
      $('.tabs').css({
         margin: '20px auto',
         width: '33%',
         border: '1px solid black'
      });
      $('ul').css({
         display: 'inline-flex',
         'justify-content': 'space-around',
         'align-items': 'center',
         margin: '20px 27px',
         width: '90%',
         height: '50px',
         border: '1px solid black',
         backgroundColor: '#ddd'
      });
      $('li').css({
         padding: '0',
         height: '25px',
         width: '30%',
         border: '1px solid black',
         'text-align': 'center',
         'line-height': '1.6rem',
         'font-size': '1.5rem',
         backgroundColor: 'white'
      });
      $(' a').css('color', 'black');
      $('fieldset').css({
         'margin': '20px auto 0',
         'padding-bottom': '20px',
         'width': '33%',
         'border': '1px solid black'
      });
      $('p').css({
         margin: '0 50px 20px 50px',
         'font-size': '1.2rem'
      });
      $('label').css({
         'display': 'inline-block',
         'margin-left': '25px',
         'font-size': '1.2rem',
         'width': '80px'
      });
      $('input').css({
         'margin': '20px 10px 10px',
         'width': '30%',
         'font-size': '1.2rem',
      });
      $('button').css({
         'margin-left': '635px',
         'font-size': '1.2rem'
      });
      $('#firstnameHelp, #lastnameHelp, #addressHelp, #tooltip').css({
         position: 'absolute',
         display: 'none',
         top: '0',
         left: '0',
         width: '220px',
         'background-color': '#fff',
         padding: '5px 10px 5px 10px',
         color: '#000',
         border: '1px solid #888',
         'border-radius': '5px',
         'box-shadow': '0 1px 2px #555',
         'font-size': '1.2rem'
      });
      //определение переменных
      var textTabs1FirstParagraf = 'Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.';
      var textTabs1SecondParagraf = '';
      var textTabs2FirstParagraf = 'Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.';
      var textTabs2SecondParagraf = '';
      var textTabs3FirstParagraf = 'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.';
      var textTabs3SecondParagraf = 'Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.';
      var $firstParagraf = $('.firstParagraf');
      var $secondParagraf = $('.secondParagraf');
      $firstParagraf[0].textContent = textTabs1FirstParagraf;
      $secondParagraf[0].textContent = textTabs1SecondParagraf;
      //вызовы
      $('#tabs1').focus();
      $('li').focus(textOut);
      $('li').click(textOut);
      $('[data-tooltip]').mousemove(tooltipOn);
      $('[data-tooltip]').mouseout(tooltipOff);
      $('[data-tooltip]').focus(tooltipOn);
      $('[data-tooltip]').focusout(tooltipOff);
      $('button').click(function() {
         $('input').each(showHelpOn);
      });
      $('button').focusout(function() {
         $('input').each(showHelpOff);
      });
      // $('button').focus(function() {
      //    $('input').each(showHelpOn);
      // });

      //функции

      function tooltipOn() {
         var $data_tooltip = $(this).attr('data-tooltip');
         $('#tooltip').text($data_tooltip)
            .css({
               'top': $(this).offset().top,
               'left': $(this).offset().left + 205
            })
            .show();
      }

      function tooltipOff() {
         $('#tooltip').hide()
            .text('')
            .css({
               'top': 0,
               'left': 0
            });
      }

      function showHelpOn(help, fildHelp) {
         var $data_tooltip;
         $data_tooltip = $(fildHelp).attr('data-tooltip');
         var helpId = '#' + $(fildHelp).attr('id') + 'Help';
         $(helpId).text($data_tooltip)
            .css({
               'top': $(fildHelp).offset().top,
               'left': $(fildHelp).offset().left + 205
            })
            .show();
      }

      function showHelpOff(help, fildHelp) {
         var helpId = '#' + $(fildHelp).attr('id') + 'Help';
         $(helpId).hide()
            .text('')
            .css({
               'top': 0,
               'left': 0
            });
      }

      function textOut() {
         $('li').css('backgroundColor', 'white');
         $(' a').css('color', 'black');
         var fildTab = event.currentTarget.attributes.id.nodeValue;
         if (fildTab === 'tabs1') {
            $('#tabs1').css('backgroundColor', 'blue');
            $('#tabs1 a').css('color', 'white');
            $firstParagraf[0].textContent = textTabs1FirstParagraf;
            $secondParagraf[0].textContent = textTabs1SecondParagraf;
         }
         if (fildTab === 'tabs2') {
            $('#tabs2').css('backgroundColor', 'blue');
            $('#tabs2 a').css('color', 'white');
            $firstParagraf[0].textContent = textTabs2FirstParagraf;
            $secondParagraf[0].textContent = textTabs2SecondParagraf;
         }
         if (fildTab === 'tabs3') {
            $('#tabs3').css('backgroundColor', 'blue');
            $('#tabs3 a').css('color', 'white');
            $firstParagraf[0].textContent = textTabs3FirstParagraf;
            $secondParagraf[0].textContent = textTabs3SecondParagraf;
         }
      }
   });
})();
