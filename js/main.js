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
    $(".navbar, .navbar-inverse").css( "display", "hidden" ).fadeOut("slow");
  }
function showNav() {
  $(".navbar, .navbar-inverse").css( "display", "visible" ).fadeIn("slow");
 }

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

var parallaxImages = [];

$('#about').each(function(index) {  
  var parallaxImage = {};
  parallaxImage.element = $(this);
  parallaxImage.height = parallaxImage.element.height();
  parallaxImages.push(parallaxImage);
});

$(window).on('resize', function() {
});

$(window).on('scroll', function() {
//   window.requestAnimationFrame(scrollHandler);
  $.each(parallaxImages, function(index, parallaxImage) {
  });
});
