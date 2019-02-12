
//toggle メニュー作るよ
$(function () {
$('.js-toggle').on('click',function(){
  $(this).toggleClass('on');
  $(this).siblings().animate({width: 'toggle'}) ;
});
});





  // ヘッダーを途中からだすよ

$(function () {

  // falg変数のデフォルト値として「up」を指定    
  var flag = "up";

  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が「500」より大きい場合
    if ($(this).scrollTop() > 500) {
　　　　// flag変数が「up」だった場合の処理
      if (flag === "up") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".cb-header").stop().animate({
          // topの位置を「-56px」から「0」になるまでアニメーション
          top: 0
        // アニメーション時間を「500ms」に設定
        }, 500)
        // flag変数の値を「down」に変更
        flag = "down";
      }
    // scrollTop()が「0」の場合
    } else {
      // flag変数が「down」だった場合の処理
      if (flag === "down") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".cb-header").stop().animate({
          // topの位置を「0」から「-56px」になるまでアニメーション
          top: "-56px"
        // アニメーション時間を「500ms」に設定
        }, 500);
        // flag変数の値を「up」に変更
        flag = "up";
      }

    }

  });

});



// ボタンのスムーズスクローる
$(function(){
$('.js-scroll-about').on('click', function(){
  $('body,html').animate({scrollTop:830},1000);
})
// ↑htmlのbodyのボディの０（座標）の位置に飛ばす

$('.js-scroll-plan').on('click', function(){
  $('body,html').animate({scrollTop:1400},1000);
})

$('.js-scroll-contact').on('click', function(){
  $('body,html').animate({scrollTop:2000},1000);
});
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


// モーダルウィンドウ表示
function popupImage() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg');

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');
  var showBtn = document.getElementById('js-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();


// 冒頭のタイピングスクリプト
$('#js-target').t();













