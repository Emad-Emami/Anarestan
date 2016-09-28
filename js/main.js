var mab = (function () {
  'use strict';

  return {

    // Call events here
    run: function () {
      this.found(); // start foundation
      this.scrolling();
      this.filters();
    },
    found: function () {
      return $(document).foundation();
    },
    scrolling: function () {
      // To Top function 
      $('.toTop').on('click', function () {
        $("html, body").animate({
          scrollTop: 0
        }, "slow");
        return false;
      });

      $(".link").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname) {
          var n = $(this.hash);
          if (n = n.length ? n : $("[name=" + this.hash.slice(1) + "]"), n.length)
            return $("html,body").animate({
              scrollTop: n.offset().top
            }, 800), !1
        }
      });
    },
    filters: function () {
      // Portfolio
      $('ul#filter a').click(function () {
        // Remove class
        $('ul#filter .active').removeClass('active');
        $(this).parent().addClass('active');
        // find same class of menu
        var filterVal = $(this).text().toLowerCase().replace(' ', '-');
        if (filterVal == 'all') {
          // If click all execute this
          $('.portfolio_item').animate({
            opacity: 1
          }, 1000);
        } else {
          // Each all and filter values
          $('.portfolio_item').each(function () {
            // Hide 
            if (!$(this).hasClass(filterVal)) {
              $(this).animate({
                opacity: 0.1
              }, 1000);
              // Show
            } else {
              $(this).animate({
                opacity: 1
              }, 1000);
            }
          });
        }
        return false;
      });
    }
  };
})();

mab.run(); // run web

$(document).ready(function(){
  flag1= false;
  flag2= false;
  flag3= false;
  flag4= false;
  flag5= false;
  flag6= false;
  $(window).scroll(function(){
    if ($('.anarestan-sections').offset().top - 300 < $(window).scrollTop() && !flag1) {
      $('.left.leafs').addClass('action');
      flag1 = true;
      setTimeout(function(){
        $('.right.leafs').addClass('action');
      },1000)
    }
    if ($(window).scrollTop() > 890 && !flag2) {
      $('.left-small-line').addClass('action');
      $('.left-large-line').addClass('action');
      flag2 = true;
    };
    if ($(window).scrollTop() > 1800 && !flag3) {
      $('.right-small-line').addClass('action');
      $('.right-large-line').addClass('action');
      flag3 = true;
    };
    if ($(window).scrollTop() > 1300 && !flag4) {
      $('.left-cloud').addClass('action');
      $('.right-cloud').addClass('action');
      flag4 = true;
    };
    if ($(window).scrollTop() > 2000 && !flag5) {
      $('.gifts').addClass('action');
      flag5 = true;
    };
    if ($(window).scrollTop() > 1300 && !flag6) {
      $('.services').addClass('action');
      flag6 = true;
    };
    if ($(window).scrollTop() < 400 ) {
      $('.action').removeClass('action');
        flag1= false;
        flag2= false;
        flag3= false;
        flag4= false;
        flag5= false;
        flag6= false;
    };
  })
})