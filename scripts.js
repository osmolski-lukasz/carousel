$(function () {
    var carouselList = $("#carousel ul");
    
    function changeSlide () {
      carouselList.animate(
        {'marginLeft':-carouselList.find('li').first().width()}, 500, moveFirstSlide
      );
    }
  
    setInterval(changeSlide, 5000);
  
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
    
});