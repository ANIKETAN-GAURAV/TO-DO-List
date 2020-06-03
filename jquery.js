$("ul").on('click',"li",function()
{ 
   $(this).toggleClass("comp");
});
/* if($(this).css("color")==="rgb(128, 128, 128)")
    {  $(this).css({
        color: "black",
        textDecoration: "none"});
    }
      else
      { 
        $(this).css({
      color: "gray",
      textDecoration: "line-through"
      
  });*/
  $('ul').on('click',"span",function(event){
      $(this).parent().fadeOut(700,function(){
          $(this).remove();
      });
    event.stopPropagation();
  })

  $('input').on("keypress",function(event){
   if(event.which=== 13)
  {   var todotxt=$(this).val();
      $(this).val("");

      $("ul").append("<li><span><i class='fas fa-trash'></i></span>"+todotxt+"</li>");
  }
    });

   $('.fa-pen').on('click',function(){
      $('input').fadeToggle(500);
   });
   