document.querySelectorAll('.year-folder').forEach(folder => {
  const header = folder.querySelector('.folder-header');
  const content = folder.querySelector('.year-content');
  const icon = folder.querySelector('.folder-icon');

  header.addEventListener('click', () => {
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    icon.textContent = isOpen ? '📁' : '📂';

    const searchInput =folder.querySelector('.tag-search input');
    const projectCards = folder.querySelectorAll('.project-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        projectCards.forEach(card => {
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const matches = tags.some(tag => tag.includes(query));
            card.style.display = matches ? 'block' : 'none';
        }      );
    });
  });
});
