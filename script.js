const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const title = document.getElementById('tab-title');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active-tab from all tabs
    tabs.forEach(t => t.classList.remove('active-tab'));
    // Add active-tab to clicked tab
    tab.classList.add('active-tab');

    // Get tab name from data attribute
    const tabName = tab.getAttribute('data-tab');

    // Hide all tab contents
    contents.forEach(c => c.classList.remove('active'));
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Update title
    title.textContent = tab.textContent.charAt(0).toUpperCase() + tab.textContent.slice(1).toLowerCase();
  });
});
