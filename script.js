const panels = document.querySelectorAll('.panel');
const activePanel = document.querySelector('.active');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    activePanel.classList.remove('active');
    panel.classList.add('active');
  });
});
