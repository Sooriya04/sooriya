const toggleOptions = document.querySelectorAll('.toggle-option');
const toggleIndicator = document.querySelector('.toggle-indicator');
const contentSections = document.querySelectorAll('.content-section');

toggleOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    toggleOptions.forEach(opt => opt.classList.remove('active'));
    contentSections.forEach(section => section.classList.remove('active'));
    option.classList.add('active');
    document.getElementById(option.dataset.target).classList.add('active');

    toggleIndicator.style.left = `calc(${index * 50}% + 5px)`;
  });
});