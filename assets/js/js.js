$(document).ready( function(){
  $('.dropdown-toggle').click( function() {
    $(".triangle-up").removeClass("showt");
    $(this).siblings('.text-end').children(".triangle-up").toggleClass('showt');
  });

  $(document).on('click',function(event) {
    if ($('.dropdown-toggle').hasClass("show")) {
      $(this).siblings('.text-end').children(".triangle-up").addClass('showt'); 
    } 
    if (!$('.dropdown-toggle').hasClass("show")) {
      $(".triangle-up").removeClass('showt'); 
    }
  });

  $('#navbarScrollMobile .dropdown-toggle').click( function() {
    if ($(this).hasClass("show")) {
      $(this).find(".chevright").css("display", "none");
      $(this).find(".chevdown").css("display", "block");
    }
    else {
      $(this).find(".chevright").css("display", "block");
      $(this).find(".chevdown").css("display", "none");
    }
  });
 
  $('#cart-mobile').click( function() {
    $(".cartmob").toggleClass('showt');
  });

  $('.password').click( function() {
    $(this).toggleClass('show');
    if ($(this).hasClass("show")) {
      $(this).find(".eyeopen").css("display", "none");
      $(this).find(".eyeclose").css("display", "block");
    }
    else {
      $(this).find(".eyeopen").css("display", "block");
      $(this).find(".eyeclose").css("display", "none");
    }
  });

  $('.card-header a').click( function() {
    $('.card-header a').find(".plusms").css("display", "block");
    $('.card-header a').find(".minusms").css("display", "none");
    $('.card-header a').find(".descpl").css("display", "none");
    if (!$(this).hasClass("collapsed")) {
      $(".icon-crear").css("background-color", "#EFF8FF");
      $(".icon-crear svg").css("color", "#4789FC");
      $(this).find(".icon-crear").css("background-color", "#4789FC");
      $(this).find(".icon-crear svg").css("color", "white");
      $(this).find(".plusms").css("display", "none");
      $(this).find(".minusms").css("display", "block");
      $(this).find(".descpl").css("display", "block");
    }
    else {
      $(this).find(".icon-crear").css("background-color", "#EFF8FF");
      $(this).find(".icon-crear svg").css("color", "#4789FC");
      $(this).find(".plusms").css("display", "block");
      $(this).find(".minusms").css("display", "none");
      $(this).find(".descpl").css("display", "none");
    }
  });

  $('.inimobile').click( function() {
    $("#navbarScrollMobile").removeClass('show');
  });

  $("#addfirmantes-select").change(function(){
    if(this.value==1){ 
      $("#adicionales").css("display", "block");
    } else{
      $("#adicionales").css("display", "none");
    }
  });

  $("#addfirmantes-select2").change(function(){
    if(this.value==1){ 
      $("#adicionales2").css("display", "block");
    } else{
      $("#adicionales2").css("display", "none");
    }
  });

  $(function(){
    $('.datepicker').datepicker();
  });

  $('#alert-ex').fadeIn('normal').delay(3000).fadeOut('slow');
  $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
  $('table').dataTable({searching: false, paging: false, info: false})

  $('[data-bs-toggle="tooltip"]').on('click', function () {
    $(this).tooltip('hide')
  })

  if($(window).width() <= 600) {
    $('.uldots a').removeAttr('data-bs-toggle');
    $(".uldots a").attr("data-bs-toggle","collapse");
    $(".uldots a").attr("data-bs-target", "#navbarDotsMobile");
    $(".uldots a").attr("type", "button");
    $(".uldots a").attr("role", "button");
  }

  $('.afirm').click( function() {
    $(".firm").toggleClass('show');
  });

  $('#close-minus').click( function() {
    $("#navbarDotsMobile").removeClass('show');
    $("#overlay").css("display", "none");

  });

  $('.dots').click( function() {
     $("#overlay").css("display", "block");
  });

  $('#previsualizar-btn').click( function() {
     $("#overlay").css("display", "block");
  });

  $('.navbar-toggler').click( function() {
    if (!$(this).hasClass("collapsed")){
      $("#overlay-menu").css("display", "block");
    } else {
      $("#overlay-menu").css("display", "none");
    }
  });

  $('#modal-eliminardoc').on('hidden.bs.modal', function () {
    $("#overlay").css("display", "none");
  })


$('.btn-close').click( function() {
    $("#overlay").css("display", "none");
  });

  $('#overlay-menu').click( function() {
    $(this).css("display", "none");
    $("#navbarScrollMobile").removeClass('show');

  });

  $('#overlay').click( function() {
    $(this).css("display", "none");
    $("#navbarDotsMobile").removeClass('show');
  });

  $('.eliminarbut').click( function() {
    $("#navbarDotsMobile").removeClass('show');
  });

if($(window).width() <= 600) {
  $('#searchms').click( function() {
    $("#filters-mobile").toggleClass('show');
    $(".search").toggleClass('show');
    $(".chevleft").toggleClass('show');
    $(this).toggleClass('space');
  });
}
});