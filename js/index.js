$(function() {

  'use strict';

  let $containers = $(".container");

  $(window).on('resize', function() {
    $containers.each(function() {
      $(this).css('background-color', `#${Math.ceil((Math.random() + 1) * 100000)}`);
    });
  });

});