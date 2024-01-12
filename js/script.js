document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.list-group-item').forEach((item) => {
    item.addEventListener('click', function () {
      // Remove 'selected' class from all items in the same accordion
      this.closest('.accordion')
        .querySelectorAll('.list-group-item')
        .forEach((el) => el.classList.remove('selected'));
      // Add 'selected' class to the clicked item
      this.classList.add('selected');
    });
  });
});

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

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.btn-primary').addEventListener('click', function () {
    const observation = document.querySelector('#observation-input').value;
    console.log(`observation`, observation);

    const request = document.querySelector('#request-input').value;
    console.log(`request`, request);

    const selectedFeelingElement = document.querySelector('#accordionFeelings .selected');
    const selectedNeedElement = document.querySelector('#accordionNeeds .selected');

    const feeling = selectedFeelingElement ? selectedFeelingElement.textContent : '';
    const need = selectedNeedElement ? selectedNeedElement.textContent : '';

    const output = `When <strong>${observation}</strong>...<br>\u00A0\u00A0\u00A0\u00A0I feel <strong>${feeling}</strong><br>\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0I need <strong>${need}</strong>.<br><br>Would you be willing to <strong>${request}</strong>?`;

    document.querySelector('#outputModal .modal-body').innerHTML = output;
  });
});
