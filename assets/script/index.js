// Initialize AOS
AOS.init({
    once: true,
    duration: 1000
});

// Skills Data with detailed information
const skillsData = [
    {
        name: 'HTML',
        icon: 'assets/images/icons/icons8-html-100.png',
        source: 'Learned from W3Schools, MDN and practice projects.',
        link: 'https://www.w3schools.com/html/'
    },
    {
        name: 'CSS',
        icon: 'assets/images/icons/icons8-css-100.png',
        source: 'Learned from CSS-Tricks, FreeCodeCamp and UI projects.',
        link: 'https://css-tricks.com/'
    },
    {
        name: 'JavaScript',
        icon: 'assets/images/icons/icons8-js-100.png',
        source: 'Learned from JavaScript.info, books, and many projects.',
        link: 'https://javascript.info/'
    },
    {
        name: 'Node.js',
        icon: 'assets/images/icons/icons8-node-js-100.png',
        source: 'Learned from Udemy Bootcamp: Node.js fundamentals, event loop, modules, npm, async programming and building server-side logic.',
        link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
    }
    ,
    {
      name: 'React',
      icon: 'assets/images/icons/icons8-react-js-100.png',
      source: 'Learned React from Udemy Ultimate React Course: components, hooks, state management, routing, and building real-world React apps.',
      link: 'https://www.udemy.com/course/the-ultimate-react-course/'
    }
    ,
    {
      name: 'Angular JS',
      icon: 'assets/images/icons/icons8-angular-100.png',
      source: 'Learned AngularJS from college coursework and self-learning through AI and small projects.',
      link: 'https://angularjs.org/'
    }
    ,
    {
      name: 'Bootstrap',
      icon: 'assets/images/icons/icons8-bootstrap-100.png',
      source: 'Learned Bootstrap through AI guidance and official documentation while building responsive UI projects.',
      link: 'https://getbootstrap.com/'
    }
    ,
    {
      name: 'Sass',
      icon: 'assets/images/icons/icons8-sass-96.png',
      source: 'Learned Sass from a YouTube tutorial covering variables, nesting, mixins, partials, and structuring scalable CSS.',
      link: 'https://youtu.be/nu5mdN2JIwM?si=Qe5IOkUukNeYx-9p'
    },
    {
        name: 'Express.js',
        icon: 'assets/images/icons/icons8-express-js-100.png',
        source: 'Learned from Udemy Bootcamp: Routing, middleware, REST API building, authentication, security, and MVC backend architecture.',
        link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
    }
    ,
    {
        name: 'MongoDB',
        icon: 'assets/images/icons/icons8-mongodb-96.png',
        source: 'Learned from Udemy Bootcamp: Mongoose models, schema design, CRUD, aggregation pipeline, geospatial queries, and database optimization.',
        link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
    }
    ,
    {
      name: 'PostgreSQL',
      icon: 'assets/images/icons/icons8-postgresql-100.png',
      source: 'Learned PostgreSQL from a YouTube tutorial and college coursework covering SQL queries, relations, and database design.',
      link: 'https://youtu.be/zw4s3Ey8ayo?si=Kug0S4ZpRKc3_j_7'
    }
    ,
    {
      name: 'MySQL',
      icon: 'assets/images/icons/icons8-sql-100.png',
      source: 'Learned MySQL mainly from college coursework along with additional practice from a YouTube tutorial.',
      link: 'https://youtu.be/5OdVJbNCSso?si=QNlsmIl1D2uA8Mvh'
    }
    ,
    {
      name: 'Python',
      icon: 'assets/images/icons/icons8-python-100.png',
      source: 'Completed Udemy 100 Days of Code: daily Python practice including fundamentals, scripts, small projects, and problem-solving.',
      link: 'https://www.udemy.com/course/100-days-of-code/'
    }
    ,
    {
      name: 'Flask',
      icon: 'assets/images/icons/icons8-flask-100.png',
      source: 'Learned Flask from Udemy 100 Days of Code: building web apps, routing, templates, forms, sessions, and deploying simple Flask projects.',
      link: 'https://www.udemy.com/course/100-days-of-code/'
    }
    ,
    {
        name: 'Java',
        icon: 'assets/images/icons/icons8-java-100.png',
        source: 'Learned Java from college coursework most and used GeeksforGeeks for understanding OOP concepts and coding practices.',
        link: 'https://www.geeksforgeeks.org/java/java/'
    }
    ,
    {
        name: 'C',
        icon: 'assets/images/icons/icons8-c-100.png',
        source: 'Learned C from college coursework covering basic programming and core concepts.',
        link: 'https://www.learn-c.org/'
    }
    ,
    {
        name: 'C++',
        icon: 'assets/images/icons/icons8-c-100.png',
        source: 'Self-learned C++ based on my C language knowledge, with additional syntax reference from YouTube tutorials.',
        link: 'https://youtu.be/-TkoO8Z07hI?si=BJK-7DhjaAOhrwc1'
    }
    ,
    {
        name: 'C#',
        icon: 'assets/images/icons/icons8-c-sharp-logo-100.png',
        source: 'Learned C# mainly from college coursework with additional reference from a YouTube tutorial.',
        link: 'https://youtu.be/wxznTygnRfQ?si=g5WtUfSB80jQ4KiN'
    }
    ,
    {
        name: 'PHP',
        icon: 'assets/images/icons/icons8-php-100.png',
        source: 'Self-learned PHP with the help of AI guidance and one small practice projects.',
        link: 'https://www.php.net/'
    },
    {
        name: 'Git',
        icon: 'assets/images/icons/icons8-git-100.png',
        source: 'Self-learned Git with the help of AI guidance and regular usage in development projects.',
        link: 'https://git-scm.com/'
    }
    ,
    {
        name: 'Docker',
        icon: 'assets/images/icons/icons8-docker-100.png',
        source: 'Learned Docker from a YouTube tutorial and practiced by experimenting with container deployment.',
        link: 'https://youtu.be/SXwC9fSwct8?si=YBVBr0KDOd03uzbS'
    },
    {
        name: 'Figma',
        icon: 'assets/images/icons/icons8-figma-100.png',
        source: 'Learned all the Figma basics from a YouTube tutorial and improved further through self-learning and UI/UX practice.',
        link: 'https://youtu.be/IOVFRMuPeVQ?si=5Wwwg7ZYclfQ9sBi'
    }
    ,
    {
        name: 'Ubuntu',
        icon: 'assets/images/icons/icons8-ubuntu-100.png',
        source: 'Learned Ubuntu mainly from college coursework, practiced hands-on, and used AI for command references.',
        link: '#'
    },
    {
        name: 'Windows Server',
        icon: 'assets/images/icons/icons8-server-100.png',
        source: 'Learned Windows Server through college networking and system administration labs.',
        link: 'https://www.microsoft.com/en-us/windows-server'
    }
    ,
    {
        name: 'Gemini AI',
        icon: 'assets/images/icons/icons8-gemini-ai-100.png',
        source: 'Learned Gemini AI by integrating it into projects and referring to official Google AI documentation.',
        link: 'https://deepmind.google/technologies/gemini/'
    }
    ,
    {
        name: 'Machine Learning',
        icon: 'assets/images/icons/icons8-machine-learning-100.png',
        source: 'Learned the fundamental ML concepts and mathematical foundations from college coursework, not focused on coding yet.',
        link: '#'
    }
    ,
    {
        name: 'Cloud Computing',
        icon: 'assets/images/icons/icons8-cloud-100.png',
        source: 'Learned cloud computing concepts from college coursework and AWS certification materials.',
        link: 'https://aws.amazon.com/certification/'
    }
    ,
    {
        name: 'Deployment',
        icon: 'assets/images/icons/icons8-deployment-100.png',
        source: 'Self-learned deployment using platforms like Firebase, Vercel, Render, Netlify, GitHub Pages, and Cloudflare.',
        link: 'https://vercel.com/'
    }
    ,
    {
        name: 'Rest API',
        icon: 'assets/images/icons/icons8-rest-api-100.png',
        source: 'Self-learned REST API concepts and implementation by studying documentation and building backend APIs.',
        link: 'https://restfulapi.net/'
    }
    ,
    {
        name: 'DevOps',
        icon: 'assets/images/icons/icons8-devops-100.png',
        source: 'Learned DevOps mainly from the TechWorld with Nana YouTube channel and gained knowledge of Docker, GitLab, Git, and CI/CD pipelines.',
        link: 'https://www.youtube.com/@TechWorldwithNana'
    }
    ,
    {
        name: 'Jenkins (Basics)',
        icon: 'assets/images/icons/icons8-jenkins-100.png',
        source: 'Learned the basics of Jenkins from a YouTube tutorial, understanding CI/CD automation and pipeline workflow.',
        link: 'https://youtu.be/6YZvp2GwT0A?si=Qx8cjV8Ymv-PxqYS'
    }
    ,
    {
        name: 'AI Integration',
        icon: 'assets/images/icons/icons8-ai-100.png',
        source: 'Self-learned through documentation and by integrating AI APIs like Gemini, Claude, OpenAI, DeepSeek, and others into projects.',
        link: '#'
    }
    ,
    {
        name: 'GraphQL',
        icon: 'assets/images/icons/icons8-graphql-100.png',
        source: 'Learned GraphQL from a YouTube tutorial and practiced building simple queries and schemas.',
        link: 'https://youtu.be/5199E50O7SI?si=1mLsEHfJy7RxKIXa'
    }
    ,
    {
        name: 'LLM',
        icon: 'assets/images/icons/icons8-file-100.png',
        source: 'Learned LLM concepts and fine-tuning basics through AI guidance and a YouTube tutorial.',
        link: 'https://youtu.be/iOdFUJiB0Zc?si=czI7Nl4UuiQSc7-Z'
    }
    ,
    {
        name: 'OLLAMA',
        icon: 'assets/images/icons/ollama-icon.png',
        source: 'Learned Ollama through documentation and hands-on projects running and integrating local LLMs.',
        link: 'https://ollama.com/'
    }
    ,
    {
        name: 'RAG',
        icon: 'assets/images/icons/vecteezy_rag-creative-icon-design_32082368.jpg',
        source: 'Learned RAG from a YouTube tutorial series and practiced it through hands-on retrieval-based AI projects.',
        link: 'https://youtube.com/playlist?list=PLNIQLFWpQMRUMjxfe8o6g3uzJ6LH_VotY&si=ovhG8ZDmSiXsQpv6'
    }

];


// Populate skills grid
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    skillsData.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-aos', 'fade-up');
        skillCard.setAttribute('data-aos-delay', (index % 10) * 50);
        skillCard.innerHTML = `
            <img src="${skill.icon}" class="skill-icon" alt="${skill.name}">
            <div class="skill-name">${skill.name}</div>
        `;
        skillCard.onclick = () => openSkillModal(skill);
        skillsGrid.appendChild(skillCard);
    });
}

// Open skill modal
// Open minimal skill modal (only source + link)
function openSkillModal(skill) {
    const modal = document.getElementById('skillModal');
    document.getElementById('modalIcon').src = skill.icon || '';
    document.getElementById('modalIcon').alt = skill.name || 'icon';
    document.getElementById('modalTitle').textContent = skill.name || '';
    // show only the learning source
    document.getElementById('modalSource').textContent = skill.source || 'No source provided.';
    
    const modalLink = document.getElementById('modalLink');
    if (skill.link) {
        modalLink.href = skill.link;
        modalLink.style.display = 'inline-flex';
    } else {
        modalLink.style.display = 'none';
    }
    
    // hide any leftover elements (if present)
    const maybeCategory = document.getElementById('modalCategory');
    if (maybeCategory) maybeCategory.style.display = 'none';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close skill modal
function closeSkillModal() {
    const modal = document.getElementById('skillModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle between Projects and Skills
document.querySelectorAll('.toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        // Update active states
        document.querySelectorAll('.toggle-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Move indicator
        const indicator = document.querySelector('.toggle-indicator');
        if (target === 'skills') {
            indicator.style.left = 'calc(50% + 5px)';
        } else {
            indicator.style.left = '5px';
        }
        
        // Show/hide content
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    });
});

// Navigation dots
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        
        document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
    });
});

// Typing animation
const jobTitles = [
    'MERN Developer',
    'UI/UX Designer',
    'AI Integration Developer',
    'DevOps & Deployment Learner',
        'RAG Developer'

];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-job-title');

function typeEffect() {
    const currentTitle = jobTitles[titleIndex];
    
    if (isDeleting) {
        typedElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % jobTitles.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Download CV function
function downloadCV() {
    alert('CV download functionality - Add your CV file path here');
    // window.location.href = 'path-to-your-cv.pdf';
}

// Scroll event for navigation dots
window.addEventListener('scroll', () => {
    const sections = ['hero', 'work'];
    let current = '';
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
        }
    });
    
    if (current) {
        document.querySelectorAll('.nav-dot').forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-section') === current) {
                dot.classList.add('active');
            }
        });
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSkillModal();
    }
});

// Initialize
populateSkills();
typeEffect();