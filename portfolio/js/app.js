
$(function(){

  // <!-- ドロップダウンメニューです -->
$('#menu dt').click(function(){

  // クリックしたら行う動作
  $('#menu dd').slideToggle();
});

});

// モーダルウィンドウ表示
$('.photo1').on('click', function(){
  $('.modal-content').fadeIn('slow');
  $('#modal-bg').fadeIn('slow');
});
$('.js-modal-close').on('click',function(){
  $('.modal-content').fadeOut(1000);
  $('#modal-bg').fadeOut(1000);
});





  //上に戻るボタンの初期化
  let topBtn=$('#scrollTop');//要素を選択し、変数に入れた
  topBtn.hide();//ボタンを非表示にする

  // // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn();// フェードインで表示
    }else{
      topBtn.fadeOut();//フェードアウトで非表示
    }
  });

  // クリックで上に戻るのを無効化する
  // topBtn.click(function(event){
  //   event.preventDefault();
  // });
  // これ必要かよくわからんけど、本に書いてあった

// スムーズに上に移動するアニメーションをつける
topBtn.click(function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop:0
  },500);



});














