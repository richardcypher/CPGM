$('.account').click(function(){
  if($.cookie('user_uri') == undefined) {
    window.location.href = "login.html";
  }
  else {
    window.location.href = "account.html"
  }
})
$(function(){
  if($.cookie('user_uri') != undefined) {
    $('.loginbtn').hide();
    $('.signupbtn').hide();
  }
})