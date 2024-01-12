document.addEventListener('DOMContentLoaded', () => {
  var accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    var buttons = accordion.querySelectorAll('.accordion-button');
    var currentSticky = null;

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        var accordionHeader = button.closest('.accordion-header');

        // If there is a currently sticky accordion, remove the sticky class
        if (currentSticky) {
          currentSticky.classList.remove('sticky');
        }

        // If the clicked button is not collapsed, make its accordion sticky
        if (!button.classList.contains('collapsed')) {
          accordionHeader.classList.add('sticky');
          currentSticky = accordionHeader;
          // Remove sticky class from parent .accordion
          accordion.classList.remove('sticky');
        } else {
          // If the clicked button is collapsed, add sticky class to parent .accordion
          accordion.classList.add('sticky');
        }
      });
    });
  });
});
