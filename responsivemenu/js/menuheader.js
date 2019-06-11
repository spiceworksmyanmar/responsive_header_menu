$( "header .btn_menu" ).click(function(event) {

  if ($(this).hasClass('is_active')) {
      $('body').css('overflow','auto');
      $('header .common_menu').css('display','none');
      $('header .common_menu').removeClass('is_active')
      $(this).removeClass('is_active');

  }else{
      $('body').css('overflow','hidden');
      $('header .common_menu').css('display','block');   
      setTimeout((function() {
        $('header .common_menu').addClass('is_active');
      }), 300);
      
      $(this).addClass('is_active');
  }
});



