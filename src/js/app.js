const collapseBtn = document.querySelector('.collapsible-btn');
const contentContainer = document.querySelector('.collapsible__content-container');


collapseBtn.addEventListener('click', () => {
  if(contentContainer.classList.contains('roll-up')) {
      contentContainer.classList.add('expand');
      setTimeout(() => contentContainer.classList.remove('roll-up'), 200);
      return;
  }

  if(contentContainer.classList.contains('expand')) {
      contentContainer.classList.add('roll-up');
      setTimeout(() => contentContainer.classList.remove('expand'), 200);
      return;
  }

  if(contentContainer.classList.contains('off')) {
      contentContainer.classList.add('expand');
      contentContainer.classList.remove('off');
      return;
  }
})