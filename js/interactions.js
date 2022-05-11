let nav = $("nav");


$(function(){
  window.addEventListener('scroll', function(){
    if(window.pageYOffset>100){
      nav.addClass('bg-black shadow')
    }else{
      nav.removeClass('bg-black shadow')
    }
  })

  
  $("#about-btn").click(function(){
    $("#about-me").removeClass("d-none")
    $("#education").addClass("d-none");
    $("#skills").addClass("d-none");
  });
  $("#education-btn").click(function(){
    $("#education").removeClass("d-none")
    $("#about-me").addClass("d-none");
    $("#skills").addClass("d-none");
  });
  $("#skills-btn").click(function(){
    $("#skills").removeClass("d-none")
    $("#education").addClass("d-none");
    $("#about-me").addClass("d-none");
  });  
})

