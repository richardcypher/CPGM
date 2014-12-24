function updatebasket(){
  var basket = [];
  if ($.cookie("basket") != undefined)
    basket = JSON.parse($.cookie("basket"));
  $('.cartnum').text('Cart(' + basket.length + ')')
  if(basket.length == 0) {
    $('.basketinfo').empty().append('<li><h3></h3></li>');
    $('.basketinfo>li:eq(0)>h3').text('没有商品')
  }
  else {
    $('.basketinfo').empty().append('<li><h3></h3></li>');
    $('.basketinfo>li:eq(0)>h3').text('共有' + basket.length + '种商品')
    for (var i = 0; i < basket.length; i++) {
      $('.basketinfo').append(
        $('<li>').append($('<p>').text(basket[i].name + '---' + basket[i].num)))
    }
  }
}


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
  updatebasket();
})