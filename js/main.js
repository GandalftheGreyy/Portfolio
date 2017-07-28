// Disappearing/Reappearing Scroll Menu
//source code: https://codepen.io/sunnyxyst/pen/DwgFm

var previousScroll = 0;

$(window).scroll(function(){
var currentScroll = $(this).scrollTop();
if (currentScroll > 0 && currentScroll < $(document).height() -
  $(window).height()){
    if (currentScroll > previousScroll){
        window.setTimeout(hideNav);
      } else {
      window.setTimeout(showNav);
    }
    previousScroll = currentScroll;
  }
});

function hideNav() {
    // $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
    $(".navbar, .navbar-inverse").css( "display", "hidden" ).fadeOut("slow");
  }
function showNav() {
  $(".navbar, .navbar-inverse").css( "display", "visible" ).fadeIn("slow");
  // $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  // $("#about", "#webPortfolio", "#graphicDesignPortfolio").show()
}

// Slide Down Effect when Clicking Buttons
// $(".webPortfolioLink").click(function(){
//   $("#about").slideUp(1500);
// });
// $(".graphicDesignPortfolioLink").click(function(){
//   $("#webPortfolio").slideUp(1500);
// });

//Hide Nav-bar after clicking specfic links
// $(
// // .aboutLink, - add in
// ".graphicDesignPortfolioLink").click(function(){
//   $(".navbar, .navbar-inverse").css( "display", "hidden" ).fadeOut("slow");
// });

//get rid of extra padding in #about qhwn nav-menu disappears
// $(".aboutLink").click(function(){
//   $("#about").css( "padding-top", "20px" );
// });
//bring back menu and padding when attempting to scrollup or move mouse to top to screen
//try to find a way to toggle it

//email message button- bootstrap modal
// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// });

//webdesign tutsplus https://webdesign.tutsplus.com/tutorials/the-perfect-lightbox-using-photoswipe-with-jquery--cms-23587
(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.picture').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();

            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);

// adding parallax
// $(window).scroll(function(e){
//     parallax();
// });
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('#about').css('top', -(scrolled * 0.2) + 'px');
// };

//version2
// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();
//     $('#about').css({
//         'transform': 'translate(0, ' + wScroll / 10 + '%)'
//     });
// });

//version3 http://kristerkari.github.io/adventures-in-webkit-land/blog/2013/08/30/fixing-a-parallax-scrolling-website-to-run-in-60-fps/
// 1. Make an array that can hold the parallax image objects
var parallaxImages = [];

$('#about').each(function(index) {
  // 2. Inside the the loop make a new object to hold each image
  var parallaxImage = {};
  // 3. Save the information that you need from the image to that object
  parallaxImage.element = $(this);
  parallaxImage.height = parallaxImage.element.height();

  // 4. At the end of the loop push the object to the `parallaxImages` array
  parallaxImages.push(parallaxImage);
});

// 5. Move both event listeners outside the `$('.parallax-bg').each` loop
$(window).on('resize', function() {
  // Code to update element values...
});

$(window).on('scroll', function() {
  window.requestAnimationFrame(scrollHandler);
  // 6. Inside the event handler we loop each cached image object from the array
  $.each(parallaxImages, function(index, parallaxImage) {
      // Logic to see which image should currently be shown...
      // Code to update `transform: translate3d` value...
  });
});

// cache the result of the user agent test
// var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
//
// $window.scroll(function(){
//   if (!isMobile) {
//     requestAnimationFrame(parallax);
//   }
// }

//change thumbnail transparency to filter
//add parallax
// when you reload the page, go to the top
// make menu disappear when you click on it
//change where I slide down to.
// quote machine only works in firefox
// fix firefox version of calulator design
//are you you remove hover, link color is white, fix
// the navbar should always be visable when the about section is visable
//change opening quote in quote machine
//speed up photography website
//consider adding popover when form is submitted
//adjust image sizes

// get smaller version of images for mobile http://photoswipe.com/documentation/responsive-images.html
