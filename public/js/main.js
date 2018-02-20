let carrossel = document.querySelector('.carrossel');

var posTopCarrossel = carrossel.offsetTop;
var posLeftCarrossel = carrossel.offsetLeft;

//Eventoss
function moveScrollCarrossel(){
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offsetTop
          }, 800, function(){
  
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      } // End if
};

