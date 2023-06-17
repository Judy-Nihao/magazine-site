import './style.scss';
import $ from 'jquery';



$(window).scroll(changeBg);

function changeBg(){
      // selectors
    let $window = $(window);
    let $body = $('body');
    let $panel = $('.panel');

    // scroll 是瀏覽器視窗上緣距離網頁頂端的距離＋33% 的瀏覽器視窗高度
    // 在滑到 panel 前的 33%視窗高度處，就提早開始變化背景色，這樣子剛好滑到 panel 時顏色也已經換好
    let scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
    let $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

    
    // 其實括號內只要什麼參數都不放，直接清除 body 當下的 classname 就好了。
    $body.removeClass();
    
    // 然後再添加新的 classname 上去 
    // Add class of currently active div
    $body.addClass('color-' + $(this).data('color'));
    
    
    // 滑到配對顏色的 panel 區塊，就去加粗 對應目錄的 a 標籤字重
    let panelColor = $(this).data('color'); // 這邊的 $(this) 是指 panel
    let anchors = $(".menulink"); // 會選到很多個 a 元素，所以要跑 forEach
    
    changeFontWeight(anchors, panelColor);
    
    }
    });    
}


function changeFontWeight(anchors, panelColor){
   
  anchors.each(
        function(){
          let dataSetColor = $(this).attr("data-color"); 
          
          if(dataSetColor == panelColor){
            $(this).css("font-weight", "700"); // 這邊的 $(this) 是指單個 a 元素
            // console.log("same");
          }else{
            $(this).css("font-weight", "300");
            // console.log("different")
          }
        })
}


// 行動版 menu 點擊切換顯示
$("button").click(function(){
  $(".menu").toggleClass("active");
});


// 點擊目錄項目就收起 menu
  $(".menulink").click(function(){
    $(".menu").removeClass("active");
  });