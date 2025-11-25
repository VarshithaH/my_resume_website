// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Print on Resume page
const printBtn = document.getElementById('printBtn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

// jQuery: gentle fade for intro and cards
$(function () {
  $('.intro, .card').css({ opacity: 0, translate: '0 6px' })
    .each(function (i) { $(this).delay(120 * i).animate({ opacity: 1 }, 260); });
});
