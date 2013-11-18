$(document).ready(function(){
/* Converts the h3s and divs into an accordion.
   active: false collapses all the panels initially.
   collapsible: true is necessary for active: false to work.
   heightStyle: "content" makes each panel as tall as its contents.
*/
  $('#settings_accordion').accordion(
    { 
      collapsible: true,
      active: false,
      heightStyle: "content"
    }
  );
  
  /* Attaches a handler function to the notifications checkbox that toggles the visibility of the notification sub-options. */
  $('input#cb_enable_notify').change(function(){
    $('div.sub_options').show();
  });
  
});
