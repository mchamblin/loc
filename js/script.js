document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(function (accordion) {
      var buttons = accordion.querySelectorAll('.accordion-button');
      var currentSticky = null;
  
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          var accordionHeader = button.closest('.accordion-header');
  
          // If there is a currently sticky accordion, remove the sticky class
          if (currentSticky) {
            currentSticky.classList.remove('sticky');
          }
  
          // If the clicked button is not collapsed, make its accordion sticky
          if (!button.classList.contains('collapsed')) {
            accordionHeader.classList.add('sticky');
            currentSticky = accordionHeader;
          }
        });
      });
    });
  });
  