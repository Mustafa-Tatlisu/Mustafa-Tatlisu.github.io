
$(document).ready(function () {
  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
document.documentElement.clientHeight
//  alert("This alert box was called with the onload event");
$(document).scroll(function() {  //alert("This alert box was called with the onload event");
    var scrollTop = document.documentElement.clientHeight-71;
  //  console.log("---");
  //  console.log(document.documentElement.clientHeight)
    if($(window).scrollTop() >= scrollTop){
      document.getElementById("make-fixed").classList.remove("margin-start");
      document.getElementById("make-fixed").classList.add("scrolling-navbar");
      document.getElementById("make-fixed").classList.add("fixed-top");
} else {
  //    alert("This alert bo11111the onload event");
        document.getElementById("make-fixed").classList.remove("fixed-top");
        document.getElementById("make-fixed").classList.add("margin-start");
        document.getElementById("make-fixed").classList.remove("scrolling-navbar");
    }
});
