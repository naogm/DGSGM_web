document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');

    content.classList.toggle('active');
    arrow.classList.toggle('rotated');
  });
});
