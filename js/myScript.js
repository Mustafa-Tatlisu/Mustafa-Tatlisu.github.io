
$(document).ready(function () {
  $('.first-button').on('click', function () {
    ///alert("This alert bo11111the onload event");


    $('.animated-icon1').toggleClass('open');
  });

  $('.nav-link').on('click', function () {
    //Every Toggle triggersa only the firt one
    alert("This alert bo2222the onload event");


    $('.animated-icon1').toggleClass('open');
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
