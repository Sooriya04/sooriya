// Initialize AOS animations
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: true,
        duration: 800,
        offset: 80
    });
}

// Masonry instance
let msnry = null;

function initMasonry() {
    const grid = document.getElementById('projectsMasonryGrid');
    if (!grid || typeof Masonry === 'undefined') return;

    msnry = new Masonry(grid, {
        itemSelector: '.project-card',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true,
        transitionDuration: '0.35s'
    });

    if (typeof imagesLoaded !== 'undefined') {
        imagesLoaded(grid, function () {
            if (msnry) msnry.layout();
        });
    }

    // Additional layout checks to guarantee clean layout after fonts & styles render
    setTimeout(() => {
        if (msnry) msnry.layout();
    }, 200);
}

// Skills Data with engineering scope and documentation
const skillsData = [
    {
        name: 'React.js',
        icon: 'assets/images/icons/icons8-react-js-100.png',
        source: 'Component architecture, custom hooks, performant state management, context APIs, and single-page web applications.',
        link: 'https://react.dev/'
    },
    {
        name: 'Node.js',
        icon: 'assets/images/icons/icons8-node-js-100.png',
        source: 'Scalable event-driven backend runtimes, asynchronous I/O, event loop mechanics, modular services, and RESTful architectures.',
        link: 'https://nodejs.org/'
    },
    {
        name: 'Express.js',
        icon: 'assets/images/icons/icons8-express-js-100.png',
        source: 'Routing, middleware composition, REST API development, JWT authentication, security best practices, and MVC backend architecture.',
        link: 'https://expressjs.com/'
    },
    {
        name: 'Python',
        icon: 'assets/images/icons/icons8-python-100.png',
        source: 'Systems and algorithmic programming, asynchronous pipelines, web backends, automation scripts, and AI/ML model orchestration.',
        link: 'https://www.python.org/'
    },
    {
        name: 'Flask',
        icon: 'assets/images/icons/icons8-flask-100.png',
        source: 'Lightweight web backend engineering: routing, Jinja templating, application factories, session security, and AI model serving.',
        link: 'https://flask.palletsprojects.com/'
    },
    {
        name: 'Agentic RAG',
        icon: 'assets/images/icons/vecteezy_rag-creative-icon-design_32082368.jpg',
        source: 'State-of-the-art Retrieval-Augmented Generation workflows: hybrid search (BM25 + vectors), query rewriting, multi-agent evaluation, and grounded context synthesis.',
        link: 'https://arxiv.org/abs/2005.11401'
    },
    {
        name: 'LLMs & Prompt Eng',
        icon: 'assets/images/icons/icons8-file-100.png',
        source: 'Applied LLM architectures, fine-tuning methodologies, context window management, and structured tool calling.',
        link: 'https://deepmind.google/technologies/gemini/'
    },
    {
        name: 'Ollama',
        icon: 'assets/images/icons/ollama-icon.png',
        source: 'Local LLM serving, quantization, custom Modelfiles, and deploying offline private inference pipelines.',
        link: 'https://ollama.com/'
    },
    {
        name: 'Gemini AI',
        icon: 'assets/images/icons/icons8-gemini-ai-100.png',
        source: 'Multimodal AI integration, function calling, long-context reasoning, and Google AI SDK production workflows.',
        link: 'https://ai.google.dev/'
    },
    {
        name: 'PostgreSQL',
        icon: 'assets/images/icons/icons8-postgresql-100.png',
        source: 'Relational database schema modeling, ACID transactions, complex joins, indexing strategies, and query performance tuning.',
        link: 'https://www.postgresql.org/'
    },
    {
        name: 'MongoDB',
        icon: 'assets/images/icons/icons8-mongodb-96.png',
        source: 'NoSQL document design, Mongoose schemas, complex aggregation pipelines, geospatial queries, and database optimization.',
        link: 'https://www.mongodb.com/'
    },
    {
        name: 'MySQL',
        icon: 'assets/images/icons/icons8-sql-100.png',
        source: 'Normalized relational database modeling, indexing strategies, ACID transactional integrity, complex joins, and query optimization.',
        link: 'https://www.mysql.com/'
    },
    {
        name: 'JavaScript (ES6+)',
        icon: 'assets/images/icons/icons8-js-100.png',
        source: 'In-depth modern JavaScript: closures, prototypes, asynchronous event loop, promises, DOM manipulation, and ES module bundling.',
        link: 'https://javascript.info/'
    },
    {
        name: 'HTML5',
        icon: 'assets/images/icons/icons8-html-100.png',
        source: 'Semantic HTML markup, web accessibility (a11y), SEO optimization, and modern web application structure.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
        name: 'CSS3',
        icon: 'assets/images/icons/icons8-css-100.png',
        source: 'Responsive layout architecture, Flexbox, CSS Grid, Masonry layout patterns, keyframe animations, and custom CSS properties.',
        link: 'https://css-tricks.com/'
    },
    {
        name: 'Sass / SCSS',
        icon: 'assets/images/icons/icons8-sass-96.png',
        source: 'Pre-processed modular CSS: nested selectors, mixins, variables, partials, and scalable architecture pattern (7-1).',
        link: 'https://sass-lang.com/'
    },
    {
        name: 'Bootstrap',
        icon: 'assets/images/icons/icons8-bootstrap-100.png',
        source: 'Rapid prototyping and mobile-first responsive design utilizing modern Bootstrap grid and component systems.',
        link: 'https://getbootstrap.com/'
    },
    {
        name: 'Angular JS',
        icon: 'assets/images/icons/icons8-angular-100.png',
        source: 'Client-side web architecture: two-way data binding, dependency injection, reusable directives, and legacy application migration.',
        link: 'https://angularjs.org/'
    },
    {
        name: 'Java',
        icon: 'assets/images/icons/icons8-java-100.png',
        source: 'Object-oriented programming (OOP), design patterns, collections framework, and algorithmic problem-solving.',
        link: 'https://dev.java/'
    },
    {
        name: 'C / C++',
        icon: 'assets/images/icons/icons8-c-100.png',
        source: 'Low-level systems programming, manual memory management, pointers, and data structures implementation.',
        link: 'https://en.cppreference.com/'
    },
    {
        name: 'C# & .NET',
        icon: 'assets/images/icons/dot-net.png',
        source: 'Object-oriented application building, .NET runtime architecture, CLR internals, and ASP.NET Core concepts.',
        link: 'https://dotnet.microsoft.com/'
    },
    {
        name: 'PHP',
        icon: 'assets/images/icons/icons8-php-100.png',
        source: 'Server-side scripting fundamentals, MySQL database interaction, and classic backend MVC patterns.',
        link: 'https://www.php.net/'
    },
    {
        name: 'Git & GitHub',
        icon: 'assets/images/icons/icons8-git-100.png',
        source: 'Distributed version control, branching strategies, interactive rebasing, merge conflict resolution, and collaborative open-source workflows.',
        link: 'https://git-scm.com/'
    },
    {
        name: 'Docker',
        icon: 'assets/images/icons/icons8-docker-100.png',
        source: 'Containerization, Dockerfile optimization, multi-stage builds, Docker Compose orchestration, and local reproduction environments.',
        link: 'https://www.docker.com/'
    },
    {
        name: 'REST API Design',
        icon: 'assets/images/icons/icons8-rest-api-100.png',
        source: 'Standardized resource modeling, idempotent HTTP methods, status codes, pagination, rate limiting, and OpenAPI/Swagger documentation.',
        link: 'https://restfulapi.net/'
    },
    {
        name: 'GraphQL',
        icon: 'assets/images/icons/icons8-graphql-100.png',
        source: 'Declarative data fetching, schema definitions, queries, mutations, resolvers, and avoiding over/under-fetching.',
        link: 'https://graphql.org/'
    },
    {
        name: 'Figma (UI/UX)',
        icon: 'assets/images/icons/icons8-figma-100.png',
        source: 'Component-driven UI design, auto-layout, interactive prototyping, typography scales, design systems, and developer handoff.',
        link: 'https://www.figma.com/'
    },
    {
        name: 'Linux / Ubuntu',
        icon: 'assets/images/icons/icons8-ubuntu-100.png',
        source: 'Command-line proficiency, bash scripting, permissions, process management (systemd, htop), and server provisioning.',
        link: 'https://ubuntu.com/'
    },
    {
        name: 'DevOps & CI/CD',
        icon: 'assets/images/icons/icons8-devops-100.png',
        source: 'Automated CI/CD pipelines, containerized deployment, test automation, and infrastructure fundamentals.',
        link: 'https://github.com/features/actions'
    },
    {
        name: 'Cloud Deployment',
        icon: 'assets/images/icons/icons8-deployment-100.png',
        source: 'Production deployments across Vercel, Render, Firebase, Cloudflare, Netlify, and self-hosted environments.',
        link: 'https://vercel.com/'
    }
];

// Populate Skills Grid
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    skillsData.forEach((skill) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <img src="${skill.icon}" class="skill-icon" alt="${skill.name}" loading="lazy">
            <div class="skill-name">${skill.name}</div>
        `;
        skillCard.onclick = () => openSkillModal(skill);
        skillsGrid.appendChild(skillCard);
    });
}

// Open Skill Modal
function openSkillModal(skill) {
    const modal = document.getElementById('skillModal');
    if (!modal) return;

    document.getElementById('modalIcon').src = skill.icon || '';
    document.getElementById('modalIcon').alt = skill.name || 'icon';
    document.getElementById('modalTitle').textContent = skill.name || '';
    document.getElementById('modalSource').textContent = skill.source || 'Engineered and applied across production systems, services, and tooling.';

    const modalLink = document.getElementById('modalLink');
    if (skill.link && skill.link !== '#') {
        modalLink.href = skill.link;
        modalLink.style.display = 'inline-flex';
    } else {
        modalLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Skill Modal
function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Switch Tab between Projects and Skills
function switchTab(target) {
    // Update active tab buttons
    document.querySelectorAll('.toggle-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-target') === target);
    });

    // Move toggle indicator
    const indicator = document.querySelector('.toggle-indicator');
    if (indicator) {
        if (target === 'skills') {
            indicator.style.left = 'calc(50% + 0px)';
        } else {
            indicator.style.left = '5px';
        }
    }

    // Toggle content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(target);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Recalculate Masonry if switching to projects
    if (target === 'projects' && msnry) {
        setTimeout(() => {
            msnry.layout();
        }, 60);
    }
}

// Attach Tab Click Listeners
document.querySelectorAll('.toggle-option').forEach(option => {
    option.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
        switchTab(target);
    });
});

// Category Filtering with Masonry Integration
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects-masonry .project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '').split(' ');
            const matches = (filter === 'all' || categories.includes(filter));

            if (matches) {
                card.classList.remove('is-hidden');
                if (msnry) msnry.unignore(card);
            } else {
                card.classList.add('is-hidden');
                if (msnry) msnry.ignore(card);
            }
        });

        // Trigger Masonry recalculation
        if (msnry) {
            msnry.layout();
        }
    });
});

// Navigation Active State on Scroll
const navItems = document.querySelectorAll('.nav-bar .nav-item[data-section]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    const sections = ['hero', 'work', 'contact'];
    let currentSection = 'hero';

    sections.forEach(secId => {
        const element = document.getElementById(secId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
                currentSection = secId;
            }
        }
    });

    navItems.forEach(item => {
        const target = item.getAttribute('data-section');
        if (target === currentSection) {
            item.classList.add('active');
        } else if (target !== 'skills') {
            item.classList.remove('active');
        }
    });
});

// Typewriter Effect
const jobTitles = [
    'AI, Systems & Full-Stack',
    'Autonomous AI & Agentic RAG',
    'High-Performance Go Systems',
    'Full-Stack Web Applications'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-job-title');

function typeEffect() {
    if (!typedElement) return;

    const currentTitle = jobTitles[titleIndex];

    if (isDeleting) {
        typedElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Close Modals on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSkillModal();
        closeProjectModal();
    }
});

// Detailed Project Data for Modal Display
const projectsDetailsData = {
    unbiasme: {
        title: "UnbiasMe",
        category: "AI & Full-Stack",
        description: "UnbiasMe is a psychology-based web application engineered to help users discover cognitive biases, subconscious decision patterns, and personality traits through structured AI assessments. Includes daily insights, analytical questionnaires, and secure session management.",
        tags: ["AI", "React.js", "Python", "Flask", "Tailwind CSS", "MongoDB"],
        architecture: "• Asynchronous Python backend executing lightweight NLP pipelines to score cognitive metrics.\n• Stateful Flask session layer with secure cryptographic tokens and React context state.\n• Responsive data visualization dashboard highlighting cognitive bias frequencies.\n• Open source repository available on GitHub.",
        link: "https://github.com/Sooriya04/unbiasme",
        linkText: "View GitHub Repository"
    },
    searqon: {
        title: "Searqon",
        category: "Systems & Search Intelligence",
        description: "An open-source, self-hosted web intelligence engine written in pure Go. Concurrently scrapes, crawls, normalizes, ranks, and synthesizes unstructured information across the web with ultra-low latency.",
        tags: ["Go", "Concurrency", "Web Crawling", "Search Ranking", "Self-Hosted"],
        architecture: "• Goroutine and channel concurrency architecture to dispatch parallel queries across multiple web indexes.\n• Custom keyword-density ranking algorithms with minimal heap memory footprint.\n• HTML normalization and content cleaning pipeline designed for low-resource environments.\n• Zero external runtime dependencies; ships as a single statically compiled binary.",
        link: "https://sooriya04.github.io/Searqon/",
        linkText: "Open Live Site"
    },
    fogoe: {
        title: "Fogoe",
        category: "Developer Tooling & CLI",
        description: "A zero-configuration, interactive scaffolding command-line utility built to generate production-ready Express or Fastify backend architectures in seconds. Ships with pre-configured templates, logging, and linting setups.",
        tags: ["Node.js", "CLI", "Express", "Fastify", "npm Package", "Winston"],
        architecture: "• Interactive CLI prompts powered by Inquirer.js with zero initial configuration required.\n• Templating engine generating clean folder structures, Dockerfiles, and ESLint/Prettier configs.\n• Published to the official npm registry with rapid startup and cross-platform compatibility.\n• Pluggable template architecture supporting database integrations (Postgres, MongoDB, Redis).",
        link: "https://www.npmjs.com/package/fogoe",
        linkText: "View on npm"
    },
    'research-copilot': {
        title: "Research Copilot",
        category: "Autonomous AI & Agentic RAG",
        description: "Research Copilot is an autonomous AI research engineering platform that streamlines scientific workflows—from discovering and analyzing academic literature to executing code repositories, verifying empirical findings, and compiling LaTeX drafts.",
        tags: ["Python", "Agentic RAG", "Model Context Protocol (MCP)", "Knowledge Graphs", "Vector Database", "LLMs"],
        architecture: "• Multi-agent coordination pipeline assigning specialized roles (literature surveyor, code reproducer, draft writer).\n• Grounded Agentic RAG combining vector embeddings with structured Knowledge Graphs.\n• Model Context Protocol (MCP) execution sandbox for safely running and validating open-source research code.\n• Automated methodology and benchmark extraction with citation-aware LaTeX compilation.",
        link: "https://github.com/Sooriya04/Research-Copilot",
        linkText: "View GitHub Repository"
    },
    'tce-bonafide': {
        title: "TCE Bonafide Application",
        category: "Production Full-Stack Web",
        description: "A production certificate automation platform built for Thiagarajar College of Engineering. Digitizes the end-to-end student bonafide certificate request, approval, and verified PDF generation pipeline. Currently deployed live in production serving students and faculty.",
        tags: ["React (Vite)", "Express.js", "PostgreSQL", "Redis", "Passwordless OTP", "Winston Telemetry"],
        architecture: "• High-throughput Express backend with PostgreSQL relational schema for student records.\n• Passwordless OTP verification preventing unauthorized requests and reducing friction.\n• Redis caching layer for active sessions and dynamic administrative dashboard queries.\n• Structured Winston logging telemetry with automated cron-based document cleanup.\n• Live in production at bonafideapp.tceapps.in.",
        link: "https://bonafideapp.tceapps.in",
        linkText: "Open Production App (bonafideapp.tceapps.in)",
        github: "https://github.com/Sooriya04/TCE-Bonafide-Application"
    }
};

function openProjectDetails(projectId) {
    const project = projectsDetailsData[projectId];
    if (!project) return;

    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalCategory').textContent = project.category;
    document.getElementById('projectModalDescription').textContent = project.description;

    const tagsContainer = document.getElementById('projectModalTags');
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'modal-tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    const architectureSection = document.getElementById('projectModalArchitectureSection');
    const architectureContent = document.getElementById('projectModalArchitecture');
    if (project.architecture) {
        architectureContent.textContent = project.architecture;
        architectureSection.style.display = 'block';
    } else {
        architectureSection.style.display = 'none';
    }

    const modalFooter = document.querySelector('.modal-footer-action');
    if (modalFooter) {
        modalFooter.innerHTML = '';
        if (project.link) {
            const liveBtn = document.createElement('a');
            liveBtn.href = project.link;
            liveBtn.target = '_blank';
            liveBtn.rel = 'noopener noreferrer';
            liveBtn.className = 'modal-action-btn';
            liveBtn.innerHTML = `<span>${project.linkText || 'Open Project Link'}</span> <i class="fas fa-external-link-alt ms-1"></i>`;
            modalFooter.appendChild(liveBtn);
        }
        if (project.github) {
            const ghBtn = document.createElement('a');
            ghBtn.href = project.github;
            ghBtn.target = '_blank';
            ghBtn.rel = 'noopener noreferrer';
            ghBtn.className = 'modal-action-btn';
            ghBtn.style.background = 'var(--card-bg-subtle)';
            ghBtn.style.color = 'var(--text-primary)';
            ghBtn.style.border = '1px solid var(--border-color)';
            ghBtn.innerHTML = `<span>View GitHub Repository</span> <i class="fab fa-github ms-1"></i>`;
            modalFooter.appendChild(ghBtn);
        }
    }

    const modal = document.getElementById('projectModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

// Set dark mode by default or if stored as dark
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Scroll Progress Bar Update
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const progress = document.getElementById('scrollProgressBar');
    if (progress) {
        progress.style.width = scrolled + '%';
    }
});

// Spotlight Card Hover Coordinates Tracker
const masonryGrid = document.getElementById('projectsMasonryGrid');
if (masonryGrid) {
    masonryGrid.addEventListener('mousemove', (e) => {
        const cards = masonryGrid.querySelectorAll('.project-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Window resize listener for Masonry layout
window.addEventListener('resize', () => {
    if (msnry) {
        msnry.layout();
    }
});

// Copy Email Helper
function copyEmail() {
    const email = 'sooriya.work@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const label = document.getElementById('copyEmailLabel');
        if (label) {
            label.textContent = 'Copied! ✓';
            setTimeout(() => {
                label.textContent = 'Copy';
            }, 3000);
        }
    }).catch(() => {
        prompt('Copy to clipboard: Ctrl+C, Enter', email);
    });
}

// Portfolio Contact Form Submission
const portfolioContactForm = document.getElementById('portfolioContactForm');
if (portfolioContactForm) {
    portfolioContactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('contactSubmitBtn');
        const alertBox = document.getElementById('formStatusAlert');
        const name = (document.getElementById('contactName') || {}).value || '';
        const email = (document.getElementById('contactEmail') || {}).value || '';
        const subject = (document.getElementById('contactSubject') || {}).value || 'Portfolio Contact';
        const message = (document.getElementById('contactMessage') || {}).value || '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin ms-1"></i>';
        }

        const mailtoSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
        const mailtoBody = encodeURIComponent(`Hi Sooriya,\n\n${message}\n\n---\nFrom: ${name} (${email})`);
        const mailtoUrl = `mailto:sooriya.work@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sooriya.work@gmail.com&su=${mailtoSubject}&body=${mailtoBody}`;

        try {
            const payload = {
                access_key: "f91a3bd1-daab-4de0-9518-f9cdbba2b0e1",
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json().catch(() => ({}));
            if (response.ok && data.success) {
                if (alertBox) {
                    alertBox.className = 'form-status-alert success';
                    alertBox.innerHTML = '<i class="fas fa-check-circle me-2"></i> Message sent successfully! I will get back to you shortly.';
                    alertBox.style.display = 'flex';
                }
                portfolioContactForm.reset();
                setTimeout(() => {
                    if (alertBox) alertBox.style.display = 'none';
                }, 8000);
            } else {
                throw new Error(data.message || 'API submission blocked');
            }
        } catch (err) {
            // Provide instant, clickable direct actions so delivery is 100% guaranteed
            if (alertBox) {
                alertBox.className = 'form-status-alert info';
                alertBox.innerHTML = `
                    <div style="font-weight: 700; margin-bottom: 4px; color: var(--text-primary); font-size: 13.5px;">
                        <i class="fas fa-paper-plane me-1"></i> Send your message directly:
                    </div>
                    <div class="alert-actions">
                        <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="btn-alert-action">
                            <i class="fas fa-envelope me-1"></i> Open in Gmail (Web)
                        </a>
                        <a href="${mailtoUrl}" class="btn-alert-action btn-alert-secondary">
                            <i class="fas fa-desktop me-1"></i> Default Mail Client
                        </a>
                    </div>
                `;
                alertBox.style.display = 'flex';
            }
            // Also attempt direct mailto trigger
            try {
                window.location.href = mailtoUrl;
            } catch (e) {}
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane ms-1"></i>';
            }
        }
    });
}

// Smooth Anchor Scrolling for all # hash links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, href);
            }
        }
    });
});

// Run Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    typeEffect();
    initMasonry();

    // Set dynamic current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Fallback in case DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    populateSkills();
    typeEffect();
    initMasonry();
}