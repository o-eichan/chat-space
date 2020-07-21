$(function(){
  $(".Form").on("submit", function(e){
    e.preventDefault()
    console.log("hoge")
    // console.logを用いてイベント発火しているか確認
  })
});