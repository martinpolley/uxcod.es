$(document).ready(function(){
  $('div#notify').show('slide', { direction: "up" }, 'slow');
  
  $('span#close').click(function(){
    $(this).parent().parent().hide('slide', { direction: "up" }, 'slow');
  });
});
