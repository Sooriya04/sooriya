const jobRoles = [
  'Web Developer',
  'UI/UX Designer',
  'Full-Stack Engineer',
  'Tech Innovator',
];
let idx = 0,
  char = 0,
  forward = true;
function typeJobTitle() {
  let el = document.getElementById('typed-job-title');
  if (!el) return;
  if (forward) {
    el.textContent = jobRoles[idx].slice(0, ++char);
    if (char === jobRoles[idx].length) forward = false;
  } else {
    el.textContent = jobRoles[idx].slice(0, --char);
    if (char === 0) {
      forward = true;
      idx = (idx + 1) % jobRoles.length;
    }
  }
  setTimeout(typeJobTitle, forward ? 90 : 50);
}
typeJobTitle();
const toggleOptions = document.querySelectorAll('.toggle-option');
const toggleIndicator = document.querySelector('.toggle-indicator');
const contentSections = document.querySelectorAll('.content-section');

toggleOptions.forEach((option, index) => {
  option.addEventListener('click', () => {
    toggleOptions.forEach((opt) => opt.classList.remove('active'));
    contentSections.forEach((section) => section.classList.remove('active'));
    option.classList.add('active');
    document.getElementById(option.dataset.target).classList.add('active');
    toggleIndicator.style.left = `calc(${index * 50}% + 5px)`;
  });
});

// Navigation dots
const navDots = document.querySelectorAll('.nav-dot');

navDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const section = dot.dataset.section;
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    navDots.forEach((d) => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

// Update active dot on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 200;

  if (scrollPos < window.innerHeight) {
    navDots.forEach((d) => d.classList.remove('active'));
    navDots[0].classList.add('active');
  } else {
    navDots.forEach((d) => d.classList.remove('active'));
    navDots[1].classList.add('active');
  }
});

function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/Files/sooriya%20CV.pdf';
  link.download = 'sooriya CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
