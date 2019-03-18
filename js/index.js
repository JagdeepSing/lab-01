$(function() {
  
  'use strict';

  // jQuery object of all container class elements
  let $containers = $(".container");

  // returns a random percentage as a string with '%' at end
  const randPercent = () => Math.floor(Math.random() * 100) + 1 + '%';

  // changes color of container elements based on screen size change
  $(window).on('resize', function() {
    let width = $(window).width();
    // for each container element
    $containers.each(function() {
      let colorOpacity;

      if (width <= 768) {
        // mobile view 
        colorOpacity = 1.0;
      } else if (width <= 960) {
        // tablet view
        colorOpacity = 0.25;
      } else {
        // desktop view
        colorOpacity = 0.05;
      }

      // $(this) instead of this, so we can use jQuery methods on it
      $(this).css('background-color', `rgb(${randPercent()}, ${randPercent()}, 
                                           ${randPercent()}, ${colorOpacity})`);
    });
  });
});