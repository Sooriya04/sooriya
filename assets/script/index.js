/* ─── TERMINAL PORTFOLIO ─── index.js ─── */

'use strict';

/* ==============================
   SKILLS DATA
   ============================== */
const skillsData = [
    // Frontend
    { name: 'HTML',       category: 'Frontend', icon: 'assets/images/icons/icons8-html-100.png',       source: 'Learned from W3Schools, MDN and practice projects.',                                                                                        link: 'https://www.w3schools.com/html/' },
    { name: 'CSS',        category: 'Frontend', icon: 'assets/images/icons/icons8-css-100.png',        source: 'Learned from CSS-Tricks, FreeCodeCamp and UI projects.',                                                                                    link: 'https://css-tricks.com/' },
    { name: 'JavaScript', category: 'Frontend', icon: 'assets/images/icons/icons8-js-100.png',        source: 'Learned from JavaScript.info, books, and many projects.',                                                                                   link: 'https://javascript.info/' },
    { name: 'React',      category: 'Frontend', icon: 'assets/images/icons/icons8-react-js-100.png',  source: 'Udemy Ultimate React Course: components, hooks, state management, routing, and real-world React apps.',                                     link: 'https://www.udemy.com/course/the-ultimate-react-course/' },
    { name: 'Angular JS', category: 'Frontend', icon: 'assets/images/icons/icons8-angular-100.png',   source: 'Learned from college coursework and self-learning through AI and small projects.',                                                           link: 'https://angularjs.org/' },
    { name: 'Bootstrap',  category: 'Frontend', icon: 'assets/images/icons/icons8-bootstrap-100.png', source: 'Learned through AI guidance and official docs while building responsive UI projects.',                                                       link: 'https://getbootstrap.com/' },
    { name: 'Sass',       category: 'Frontend', icon: 'assets/images/icons/icons8-sass-96.png',       source: 'Learned from a YouTube tutorial: variables, nesting, mixins, partials, and scalable CSS.',                                                  link: 'https://youtu.be/nu5mdN2JIwM?si=Qe5IOkUukNeYx-9p' },
    // Backend
    { name: 'Node.js',    category: 'Backend',  icon: 'assets/images/icons/icons8-node-js-100.png',   source: 'Udemy Bootcamp: event loop, modules, npm, async programming, and server-side logic.',                                                      link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/' },
    { name: 'Express.js', category: 'Backend',  icon: 'assets/images/icons/icons8-express-js-100.png',source: 'Udemy Bootcamp: routing, middleware, REST APIs, authentication, security, and MVC architecture.',                                          link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/' },
    { name: 'Flask',      category: 'Backend',  icon: 'assets/images/icons/icons8-flask-100.png',     source: 'Udemy 100 Days of Code: routing, templates, forms, sessions, and Flask deployment.',                                                        link: 'https://www.udemy.com/course/100-days-of-code/' },
    { name: 'GraphQL',    category: 'Backend',  icon: 'assets/images/icons/icons8-graphql-100.png',   source: 'YouTube tutorial, practiced building queries and schemas.',                                                                                  link: 'https://youtu.be/5199E50O7SI?si=1mLsEHfJy7RxKIXa' },
    // Databases
    { name: 'MongoDB',    category: 'Database', icon: 'assets/images/icons/icons8-mongodb-96.png',    source: 'Udemy Bootcamp: Mongoose, schema design, CRUD, aggregation, geospatial queries, and optimization.',                                        link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/' },
    { name: 'PostgreSQL', category: 'Database', icon: 'assets/images/icons/icons8-postgresql-100.png',source: 'YouTube tutorial + college coursework: SQL queries, relations, and database design.',                                                       link: 'https://youtu.be/zw4s3Ey8ayo?si=Kug0S4ZpRKc3_j_7' },
    { name: 'MySQL',      category: 'Database', icon: 'assets/images/icons/icons8-sql-100.png',       source: 'Mainly college coursework with additional practice from a YouTube tutorial.',                                                                link: 'https://youtu.be/5OdVJbNCSso?si=QNlsmIl1D2uA8Mvh' },
    // Languages
    { name: 'Python',     category: 'Languages',icon: 'assets/images/icons/icons8-python-100.png',    source: 'Udemy 100 Days of Code: daily practice, fundamentals, scripts, small projects, and problem-solving.',                                      link: 'https://www.udemy.com/course/100-days-of-code/' },
    { name: 'Java',       category: 'Languages',icon: 'assets/images/icons/icons8-java-100.png',      source: 'College coursework + GeeksforGeeks for OOP concepts.',                                                                                     link: 'https://www.geeksforgeeks.org/java/java/' },
    { name: 'C',          category: 'Languages',icon: 'assets/images/icons/icons8-c-100.png',         source: 'College coursework covering basic programming and core concepts.',                                                                           link: 'https://www.learn-c.org/' },
    { name: 'C++',        category: 'Languages',icon: 'assets/images/icons/icons8-c-100.png',         source: 'Self-learned based on C knowledge, syntax reference from YouTube.',                                                                         link: 'https://youtu.be/-TkoO8Z07hI?si=BJK-7DhjaAOhrwc1' },
    { name: 'C#',         category: 'Languages',icon: 'assets/images/icons/icons8-c-sharp-logo-100.png', source: 'College coursework + YouTube tutorial reference.',                                                                                     link: 'https://youtu.be/wxznTygnRfQ?si=g5WtUfSB80jQ4KiN' },
    { name: 'PHP',        category: 'Languages',icon: 'assets/images/icons/icons8-php-100.png',       source: 'Self-learned with AI guidance and one practice project.',                                                                                   link: 'https://www.php.net/' },
    // DevOps & Tools
    { name: 'Git',        category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-git-100.png',     source: 'Self-learned with AI guidance and regular usage in development.',                                                                      link: 'https://git-scm.com/' },
    { name: 'Docker',     category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-docker-100.png',  source: 'YouTube tutorial, practiced with container deployment experiments.',                                                                   link: 'https://youtu.be/SXwC9fSwct8?si=YBVBr0KDOd03uzbS' },
    { name: 'DevOps',     category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-devops-100.png',  source: 'TechWorld with Nana YouTube: Docker, GitLab, Git, and CI/CD pipelines.',                                                              link: 'https://www.youtube.com/@TechWorldwithNana' },
    { name: 'Jenkins',    category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-jenkins-100.png', source: 'YouTube tutorial: CI/CD automation and pipeline workflow basics.',                                                                     link: 'https://youtu.be/6YZvp2GwT0A?si=Qx8cjV8Ymv-PxqYS' },
    { name: 'Ubuntu',     category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-ubuntu-100.png',  source: 'College coursework, hands-on practice, and AI command references.',                                                                   link: '#' },
    { name: 'Deployment', category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-deployment-100.png', source: 'Self-learned using Firebase, Vercel, Render, Netlify, GitHub Pages, and Cloudflare.',                                             link: 'https://vercel.com/' },
    { name: '.NET',       category: 'DevOps & Tools', icon: 'assets/images/icons/dot-net.png',             source: 'CLR, ASP.NET, C# and application development from YouTube tutorial and practice.',                                                   link: 'https://youtu.be/RwQVRXEs370?si=XlfCuBTaZhlh7hXp' },
    { name: 'Figma',      category: 'DevOps & Tools', icon: 'assets/images/icons/icons8-figma-100.png',    source: 'YouTube tutorial and self-learning for UI/UX practice.',                                                                              link: 'https://youtu.be/IOVFRMuPeVQ?si=5Wwwg7ZYclfQ9sBi' },
    // AI & ML
    { name: 'Gemini AI',  category: 'AI & ML', icon: 'assets/images/icons/icons8-gemini-ai-100.png',    source: 'Integrating into projects and referring to official Google AI documentation.',                                                            link: 'https://deepmind.google/technologies/gemini/' },
    { name: 'AI Integration', category: 'AI & ML', icon: 'assets/images/icons/icons8-ai-100.png',     source: 'Self-learned by integrating Gemini, Claude, OpenAI, DeepSeek, and other AI APIs into projects.',                                         link: '#' },
    { name: 'LLM',        category: 'AI & ML', icon: 'assets/images/icons/icons8-file-100.png',        source: 'LLM concepts and fine-tuning basics via AI guidance and YouTube tutorial.',                                                               link: 'https://youtu.be/iOdFUJiB0Zc?si=czI7Nl4UuiQSc7-Z' },
    { name: 'OLLAMA',     category: 'AI & ML', icon: 'assets/images/icons/ollama-icon.png',            source: 'Documentation and hands-on projects running and integrating local LLMs.',                                                                 link: 'https://ollama.com/' },
    { name: 'RAG',        category: 'AI & ML', icon: 'assets/images/icons/vecteezy_rag-creative-icon-design_32082368.jpg', source: 'YouTube tutorial series + hands-on retrieval-based AI projects.',                                                    link: 'https://youtube.com/playlist?list=PLNIQLFWpQMRUMjxfe8o6g3uzJ6LH_VotY&si=ovhG8ZDmSiXsQpv6' },
    { name: 'Machine Learning', category: 'AI & ML', icon: 'assets/images/icons/icons8-machine-learning-100.png', source: 'Fundamental ML concepts and mathematical foundations from college coursework.',                                               link: '#' },
    { name: 'Cloud Computing', category: 'AI & ML', icon: 'assets/images/icons/icons8-cloud-100.png', source: 'Cloud concepts from college coursework and AWS certification materials.',                                                                  link: 'https://aws.amazon.com/certification/' },
    { name: 'Rest API',   category: 'AI & ML', icon: 'assets/images/icons/icons8-rest-api-100.png',   source: 'Self-learned via documentation and building backend APIs.',                                                                               link: 'https://restfulapi.net/' },
];

/* ==============================
   SKILLS RENDER
   ============================== */
function populateSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Group by category
    const categories = {};
    skillsData.forEach(s => {
        if (!categories[s.category]) categories[s.category] = [];
        categories[s.category].push(s);
    });

    Object.entries(categories).forEach(([cat, items]) => {
        const catEl = document.createElement('div');
        catEl.className = 'skill-category';

        const label = document.createElement('div');
        label.className = 'skill-category-label';
        label.textContent = cat;
        catEl.appendChild(label);

        const chips = document.createElement('div');
        chips.className = 'skills-chips';

        items.forEach(skill => {
            const chip = document.createElement('div');
            chip.className = 'skill-chip';
            chip.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" onerror="this.style.display='none'" />${skill.name}`;
            chip.onclick = () => openSkillModal(skill);
            chips.appendChild(chip);
        });

        catEl.appendChild(chips);
        grid.appendChild(catEl);
    });
}

/* ==============================
   SKILL MODAL
   ============================== */
function openSkillModal(skill) {
    const modal = document.getElementById('skillModal');
    document.getElementById('modalIcon').src = skill.icon || '';
    document.getElementById('modalIcon').alt = skill.name || '';
    document.getElementById('modalTitle').textContent = skill.name || '';
    document.getElementById('modalSource').textContent = skill.source || 'No source provided.';

    const link = document.getElementById('modalLink');
    if (skill.link && skill.link !== '#') {
        link.href = skill.link;
        link.style.display = 'inline-flex';
    } else {
        link.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSkillModal() {
    document.getElementById('skillModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSkillModal();
});

/* ==============================
   TAB TOGGLE (Projects / Skills)
   ============================== */
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const target = this.dataset.target;

        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});

/* ==============================
   TYPING ANIMATION (hero role)
   ============================== */
const roles = [
    'MERN Developer',
    'UI/UX Designer',
    'AI Integration Developer',
    'DevOps & Deployment Learner',
    'RAG Developer',
];

let rIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-role');

function typeRole() {
    if (!typedEl) return;
    const cur = roles[rIdx];
    typedEl.textContent = deleting
        ? cur.substring(0, cIdx - 1)
        : cur.substring(0, cIdx + 1);

    deleting ? cIdx-- : cIdx++;
    let speed = deleting ? 45 : 90;

    if (!deleting && cIdx === cur.length) {
        speed = 2200;
        deleting = true;
    } else if (deleting && cIdx === 0) {
        deleting = false;
        rIdx = (rIdx + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeRole, speed);
}

/* ==============================
   LIVE CLOCK
   ============================== */
function updateClock() {
    const el = document.getElementById('clock');
    if (!el) return;
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ==============================
   TOP BAR NAV ACTIVE
   ============================== */
const sections = [
    { id: 'hero', nav: 'nav-home' },
    { id: 'work', nav: 'nav-work' },
];

window.addEventListener('scroll', () => {
    sections.forEach(({ id, nav }) => {
        const el = document.getElementById(id);
        const navEl = document.getElementById(nav);
        if (!el || !navEl) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
            document.querySelectorAll('.top-bar-nav a').forEach(a => a.classList.remove('active'));
            navEl.classList.add('active');
        }
    });
}, { passive: true });

/* ==============================
   CV DOWNLOAD
   ============================== */
function downloadCV() {
    alert('CV download — add your CV file path here.\n// window.location.href = "path/to/cv.pdf";');
}

/* ==============================
   INIT
   ============================== */
populateSkills();
typeRole();