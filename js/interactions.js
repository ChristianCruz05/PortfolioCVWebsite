let nav = $("nav");
$(function(){
  window.addEventListener('scroll', function(){
    if(window.pageYOffset>100){
      nav.addClass('bg-black shadow')
    }else{
      nav.removeClass('bg-black shadow')
    }
  })
  
})

