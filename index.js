if ($(window).width() < 800) {
  $(".menuimage").attr("src", "images/bread-backgroundst2.jpg");
  $("#menu").css("background-color", "#A6160C");
}
else{
  $(".menuimage").attr("src", "images/bread-backgroundst.png");
}

$(window).resize(function() {
if ($(window).width() < 800) {
  $(".menuimage").attr("src", "images/bread-backgroundst2.jpg");
  $("#menu").css("background-color", "#A6160C");
}
else{
  $(".menuimage").attr("src", "images/bread-backgroundst.png");
}
});
