/* ==========================================================================
   DEVELOPER IDE WORKSPACE CONTROLLER (VS CODE / NEOCLI THEMED)
   ========================================================================== */

// 1. SKILLS DATASET (Categorized & Referenced)
const skillsData = [
  // --- Programming Languages ---
  {
    name: 'Go',
    category: 'languages',
    icon: 'assets/images/icons/icons8-mcp-100.png', // Fallback to custom icon
    source: 'Self-learned and mastered by building Searqon, an open-source high-concurrency web crawling engine.',
    link: 'https://go.dev/doc/'
  },
  {
    name: 'HTML',
    category: 'languages',
    icon: 'assets/images/icons/icons8-html-100.png',
    source: 'Learned from W3Schools, MDN and practice projects.',
    link: 'https://www.w3schools.com/html/'
  },
  {
    name: 'CSS',
    category: 'languages',
    icon: 'assets/images/icons/icons8-css-100.png',
    source: 'Learned from CSS-Tricks, FreeCodeCamp and UI projects.',
    link: 'https://css-tricks.com/'
  },
  {
    name: 'JavaScript',
    category: 'languages',
    icon: 'assets/images/icons/icons8-js-100.png',
    source: 'Learned from JavaScript.info, books, and many projects.',
    link: 'https://javascript.info/'
  },
  {
    name: 'Python',
    category: 'languages',
    icon: 'assets/images/icons/icons8-python-100.png',
    source: 'Completed Udemy 100 Days of Code: daily Python practice including fundamentals, scripts, small projects, and problem-solving.',
    link: 'https://www.udemy.com/course/100-days-of-code/'
  },
  {
    name: 'Java',
    category: 'languages',
    icon: 'assets/images/icons/icons8-java-100.png',
    source: 'Learned Java from college coursework and used GeeksforGeeks for understanding OOP concepts and coding practices.',
    link: 'https://www.geeksforgeeks.org/java/java/'
  },
  {
    name: 'C',
    category: 'languages',
    icon: 'assets/images/icons/icons8-c-100.png',
    source: 'Learned C from college coursework covering basic programming and core concepts.',
    link: 'https://www.learn-c.org/'
  },
  {
    name: 'C++',
    category: 'languages',
    icon: 'assets/images/icons/icons8-c-100.png',
    source: 'Self-learned C++ based on my C language knowledge, with additional syntax reference from YouTube tutorials.',
    link: 'https://youtu.be/-TkoO8Z07hI?si=BJK-7DhjaAOhrwc1'
  },
  {
    name: 'C#',
    category: 'languages',
    icon: 'assets/images/icons/icons8-c-sharp-logo-100.png',
    source: 'Learned C# mainly from college coursework with additional reference from a YouTube tutorial.',
    link: 'https://youtu.be/wxznTygnRfQ?si=g5WtUfSB80jQ4KiN'
  },
  {
    name: 'PHP',
    category: 'languages',
    icon: 'assets/images/icons/icons8-php-100.png',
    source: 'Self-learned PHP with the help of AI guidance and small practice projects.',
    link: 'https://www.php.net/'
  },
  {
    name: 'Sass',
    category: 'languages',
    icon: 'assets/images/icons/icons8-sass-96.png',
    source: 'Learned Sass from a YouTube tutorial covering variables, nesting, mixins, partials, and structuring scalable CSS.',
    link: 'https://youtu.be/nu5mdN2JIwM?si=Qe5IOkUukNeYx-9p'
  },

  // --- Frameworks & Libraries ---
  {
    name: 'Node.js',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-node-js-100.png',
    source: 'Learned from Udemy Bootcamp: Node.js fundamentals, event loop, modules, npm, async programming and building server-side logic.',
    link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
  },
  {
    name: 'React',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-react-js-100.png',
    source: 'Learned React from Udemy Ultimate React Course: components, hooks, state management, routing, and building real-world React apps.',
    link: 'https://www.udemy.com/course/the-ultimate-react-course/'
  },
  {
    name: 'Angular JS',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-angular-100.png',
    source: 'Learned AngularJS from college coursework and self-learning through AI and small projects.',
    link: 'https://angularjs.org/'
  },
  {
    name: 'Bootstrap',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-bootstrap-100.png',
    source: 'Learned Bootstrap through AI guidance and official documentation while building responsive UI projects.',
    link: 'https://getbootstrap.com/'
  },
  {
    name: 'Express.js',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-express-js-100.png',
    source: 'Learned from Udemy Bootcamp: Routing, middleware, REST API building, authentication, security, and MVC backend architecture.',
    link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
  },
  {
    name: 'Flask',
    category: 'frameworks',
    icon: 'assets/images/icons/icons8-flask-100.png',
    source: 'Learned Flask from Udemy 100 Days of Code: building web apps, routing, templates, forms, sessions, and deploying simple Flask projects.',
    link: 'https://www.udemy.com/course/100-days-of-code/'
  },
  {
    name: '.NET Framework',
    category: 'frameworks',
    icon: 'assets/images/icons/dot-net.png',
    source: 'Learned .NET Framework fundamentals including CLR, ASP.NET, C#, and application development concepts through a structured YouTube tutorial.',
    link: 'https://youtu.be/RwQVRXEs370?si=XlfCuBTaZhlh7hXp'
  },

  // --- Databases ---
  {
    name: 'PostgreSQL',
    category: 'databases',
    icon: 'assets/images/icons/icons8-postgresql-100.png',
    source: 'Learned PostgreSQL from a YouTube tutorial and college coursework covering SQL queries, relations, and database design. Heavily utilized in Searqon.',
    link: 'https://youtu.be/zw4s3Ey8ayo?si=Kug0S4ZpRKc3_j_7'
  },
  {
    name: 'MongoDB',
    category: 'databases',
    icon: 'assets/images/icons/icons8-mongodb-96.png',
    source: 'Learned from Udemy Bootcamp: Mongoose models, schema design, CRUD, aggregation pipeline, geospatial queries, and database optimization.',
    link: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/'
  },
  {
    name: 'MySQL',
    category: 'databases',
    icon: 'assets/images/icons/icons8-sql-100.png',
    source: 'Learned MySQL mainly from college coursework along with additional practice from a YouTube tutorial.',
    link: 'https://youtu.be/5OdVJbNCSso?si=QNlsmIl1D2uA8Mvh'
  },
  {
    name: 'REST API',
    category: 'databases',
    icon: 'assets/images/icons/icons8-rest-api-100.png',
    source: 'Self-learned REST API concepts and implementation by studying documentation and building backend APIs.',
    link: 'https://restfulapi.net/'
  },
  {
    name: 'GraphQL',
    category: 'databases',
    icon: 'assets/images/icons/icons8-graphql-100.png',
    source: 'Learned GraphQL from a YouTube tutorial and practiced building queries and schemas.',
    link: 'https://youtu.be/5199E50O7SI?si=1mLsEHfJy7RxKIXa'
  },

  // --- AI & DevOps ---
  {
    name: 'Gemini AI',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-gemini-ai-100.png',
    source: 'Learned Gemini AI by integrating it into projects and referring to official Google AI documentation.',
    link: 'https://deepmind.google/technologies/gemini/'
  },
  {
    name: 'OLLAMA',
    category: 'ai-devops',
    icon: 'assets/images/icons/ollama-icon.png',
    source: 'Learned Ollama through documentation and hands-on projects running and integrating local LLMs.',
    link: 'https://ollama.com/'
  },
  {
    name: 'RAG',
    category: 'ai-devops',
    icon: 'assets/images/icons/vecteezy_rag-creative-icon-design_32082368.jpg',
    source: 'Learned Retrieval Augmented Generation from a YouTube tutorial series and practiced it through hands-on retrieval-based AI projects.',
    link: 'https://youtube.com/playlist?list=PLNIQLFWpQMRUMjxfe8o6g3uzJ6LH_VotY&si=ovhG8ZDmSiXsQpv6'
  },
  {
    name: 'AI Integration',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-ai-100.png',
    source: 'Self-learned through documentation and by integrating AI APIs like Gemini, Claude, OpenAI, and DeepSeek into backend applications.',
    link: 'https://deepmind.google/technologies/gemini/'
  },
  {
    name: 'LLM',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-file-100.png',
    source: 'Learned LLM concepts and fine-tuning basics through AI guidance and targeted tutorials.',
    link: 'https://youtu.be/iOdFUJiB0Zc?si=czI7Nl4UuiQSc7-Z'
  },
  {
    name: 'Machine Learning',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-machine-learning-100.png',
    source: 'Learned fundamental ML concepts and mathematical foundations from college coursework.',
    link: 'https://www.coursera.org/learn/machine-learning'
  },
  {
    name: 'Docker',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-docker-100.png',
    source: 'Learned Docker from a YouTube tutorial and practiced by experimenting with container deployment.',
    link: 'https://youtu.be/SXwC9fSwct8?si=YBVBr0KDOd03uzbS'
  },
  {
    name: 'Git',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-git-100.png',
    source: 'Self-learned Git with the help of AI guidance and regular usage in development projects.',
    link: 'https://git-scm.com/'
  },
  {
    name: 'DevOps',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-devops-100.png',
    source: 'Learned DevOps mainly from the TechWorld with Nana YouTube channel and gained knowledge of Docker, GitLab, Git, and CI/CD pipelines.',
    link: 'https://www.youtube.com/@TechWorldwithNana'
  },
  {
    name: 'Jenkins',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-jenkins-100.png',
    source: 'Learned the basics of Jenkins from a YouTube tutorial, understanding CI/CD automation and pipeline workflow.',
    link: 'https://youtu.be/6YZvp2GwT0A?si=Qx8cjV8Ymv-PxqYS'
  },
  {
    name: 'Deployment',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-deployment-100.png',
    source: 'Self-learned deployment using platforms like Firebase, Vercel, Render, Netlify, GitHub Pages, and Cloudflare.',
    link: 'https://vercel.com/'
  },
  {
    name: 'Ubuntu',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-ubuntu-100.png',
    source: 'Learned Ubuntu mainly from college coursework, practiced hands-on, and used AI for command references.',
    link: 'https://ubuntu.com/'
  },
  {
    name: 'Windows Server',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-server-100.png',
    source: 'Learned Windows Server through college networking and system administration labs.',
    link: 'https://www.microsoft.com/en-us/windows-server'
  },
  {
    name: 'Cloud Computing',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-cloud-100.png',
    source: 'Learned cloud computing concepts from college coursework and AWS certification materials.',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    name: 'Figma',
    category: 'ai-devops',
    icon: 'assets/images/icons/icons8-figma-100.png',
    source: 'Learned all the Figma basics from a YouTube tutorial and improved further through self-learning and UI/UX practice.',
    link: 'https://youtu.be/IOVFRMuPeVQ?si=5Wwwg7ZYclfQ9sBi'
  }
];

// 2. STATE OBJECT
const ideState = {
  activeFile: 'README.md',
  openFiles: ['README.md', 'projects.go', 'skills.json', 'contact.json'],
  theme: 'dark',
  sidebarCollapsed: false,
  terminalHeight: 'normal', // normal, minimized, maximized
  skillsFilter: 'all',
  skillsSearchQuery: '',
  terminalHistoryList: [],
  inVimMode: false,
  vimBuffer: ''
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  setupEditorTabs();
  setupSidebarNavigation();
  setupSkillsDisplay();
  setupTerminal();
  setupGutterNumbers();
  setupContributionChart();
  setupThemeToggle();
  setupContactForm();
  startTypingEffect();
  
  // Hash routing for deep-links
  const hash = window.location.hash;
  if (hash === '#contact' || hash === '#contact.json') {
    openFileTab('contact.json');
  } else if (hash === '#projects' || hash === '#projects.go') {
    openFileTab('projects.go');
  } else if (hash === '#skills' || hash === '#skills.json') {
    openFileTab('skills.json');
  }
  
  // Track scroll position in editor for line number updates
  document.getElementById('ideWindow').addEventListener('click', (e) => {
    // Focus terminal input if user clicked inside terminal
    const terminalPane = document.getElementById('pane-terminal');
    if (terminalPane.contains(e.target)) {
      document.getElementById('terminalInput').focus();
    }
  });

  // Handle direct window sizing on resize
  window.addEventListener('resize', () => {
    setupGutterNumbers();
  });
});

// 4. EDITOR TABS & BREADCRUMBS CONTROL
function setupEditorTabs() {
  const tabsContainer = document.getElementById('editorTabs');
  
  // Tab clicking
  tabsContainer.addEventListener('click', (e) => {
    const tabItem = e.target.closest('.tab-item');
    if (!tabItem) return;
    
    const file = tabItem.getAttribute('data-file');
    
    // Check if user clicked close tab button
    if (e.target.classList.contains('tab-close')) {
      e.stopPropagation();
      closeFileTab(file);
    } else {
      openFileTab(file);
    }
  });

  // Sidebar File Tree clicking
  const folderFiles = document.getElementById('folderFiles');
  folderFiles.addEventListener('click', (e) => {
    const fileItem = e.target.closest('.file-item');
    if (!fileItem) return;
    
    const file = fileItem.getAttribute('data-file');
    openFileTab(file);
  });

  // Folder collapse toggle
  document.getElementById('folderHeader').addEventListener('click', () => {
    const folder = document.querySelector('.explorer-folder');
    folder.classList.toggle('collapsed');
  });
}

function openFileTab(filename) {
  ideState.activeFile = filename;
  
  // Add to open files if not there
  if (!ideState.openFiles.includes(filename)) {
    ideState.openFiles.push(filename);
    renderTabHeaders();
  }

  // Set active tab class
  document.querySelectorAll('.tab-item').forEach(tab => {
    if (tab.getAttribute('data-file') === filename) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Set active sidebar item class
  document.querySelectorAll('.file-item').forEach(item => {
    if (item.getAttribute('data-file') === filename) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Switch view visibility
  document.querySelectorAll('.file-view').forEach(view => {
    if (view.id === `view-${filename}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  // Update Breadcrumbs (VS Code feature)
  document.getElementById('breadcrumbActiveFile').textContent = filename;

  // Update Window Title (VS Code style)
  const titleText = document.querySelector('.workspace-title span');
  if (titleText) {
    titleText.textContent = `${filename} - sooriya - Visual Studio Code`;
  }

  // Update Status Bar Language
  const extension = filename.split('.').pop();
  let langLabel = 'Plain Text';
  if (extension === 'md') langLabel = 'Markdown';
  else if (extension === 'go') langLabel = 'Go';
  else if (extension === 'json') langLabel = 'JSON';
  
  document.getElementById('statusBarLanguage').textContent = langLabel;

  // Refresh line numbers gutter
  setupGutterNumbers();
}

function closeFileTab(filename) {
  // Remove from open list
  ideState.openFiles = ideState.openFiles.filter(f => f !== filename);
  
  // Re-render tab headers
  renderTabHeaders();
  
  // If we closed the active file, switch to the last open file, or clear view
  if (ideState.activeFile === filename) {
    if (ideState.openFiles.length > 0) {
      openFileTab(ideState.openFiles[ideState.openFiles.length - 1]);
    } else {
      // No files open
      ideState.activeFile = '';
      document.querySelectorAll('.file-view').forEach(view => view.classList.remove('active'));
      document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));
      document.getElementById('statusBarLanguage').textContent = 'None';
      document.getElementById('breadcrumbActiveFile').textContent = 'None';
      const titleText = document.querySelector('.workspace-title span');
      if (titleText) titleText.textContent = `sooriya - Visual Studio Code`;
      setupGutterNumbers();
    }
  }
}

function renderTabHeaders() {
  const tabsContainer = document.getElementById('editorTabs');
  tabsContainer.innerHTML = '';
  
  ideState.openFiles.forEach(file => {
    const extension = file.split('.').pop();
    let iconClass = 'fa-regular fa-file';
    let iconColorClass = 'text-muted';
    
    if (extension === 'md') { iconClass = 'fa-brands fa-markdown'; iconColorClass = 'md-color'; }
    else if (extension === 'go') { iconClass = 'fa-brands fa-golang'; iconColorClass = 'go-color'; }
    else if (extension === 'json') { iconClass = 'fa-solid fa-braces-asterisk'; iconColorClass = 'json-color'; }
    
    const activeClass = ideState.activeFile === file ? 'active' : '';
    
    const tabEl = document.createElement('div');
    tabEl.className = `tab-item ${activeClass}`;
    tabEl.setAttribute('data-file', file);
    tabEl.innerHTML = `
      <i class="${iconClass} ${iconColorClass}"></i>
      <span>${file}</span>
      <i class="fa-solid fa-xmark tab-close"></i>
    `;
    tabsContainer.appendChild(tabEl);
  });
}

// 5. SIDEBAR & ACTIVITY NAVIGATION
function setupSidebarNavigation() {
  // Activity bar buttons
  const activityButtons = document.querySelectorAll('.activity-btn[data-tab]');
  activityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      
      if (tabTarget === 'explorer') {
        // Toggle collapse
        if (ideState.sidebarCollapsed) {
          expandSidebar();
          btn.classList.add('active');
        } else {
          collapseSidebar();
          btn.classList.remove('active');
        }
      } else if (tabTarget === 'search-bar') {
        openFileTab('skills.json');
        document.getElementById('skillsSearch').focus();
      } else if (tabTarget === 'git') {
        logToTerminalSystem('Opening git tracking log...', 'comment');
        openFileTab('README.md');
      } else if (tabTarget === 'run-debug') {
        logToTerminalSystem('Opening debugger pane... No problems found.', 'success');
      } else if (tabTarget === 'extensions') {
        logToTerminalSystem('Opening extensions directory... Antigravity Pack v1.0 active.', 'success');
      }
    });
  });

  // Collapsible sidebar toggle (bottom settings button)
  document.getElementById('sidebarToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    if (ideState.sidebarCollapsed) {
      expandSidebar();
    } else {
      collapseSidebar();
    }
  });
}

function collapseSidebar() {
  document.getElementById('sidebarPanel').classList.add('collapsed');
  document.querySelector('.activity-btn[data-tab="explorer"]').classList.remove('active');
  ideState.sidebarCollapsed = true;
  setTimeout(setupGutterNumbers, 350); // wait for transitions
}

function expandSidebar() {
  document.getElementById('sidebarPanel').classList.remove('collapsed');
  document.querySelector('.activity-btn[data-tab="explorer"]').classList.add('active');
  ideState.sidebarCollapsed = false;
  setTimeout(setupGutterNumbers, 350);
}

// 6. SKILLS DASHBOARD AND FILTERS
function setupSkillsDisplay() {
  const displayGrid = document.getElementById('skillsDisplayGrid');
  const searchInput = document.getElementById('skillsSearch');
  const clearSearchBtn = document.getElementById('skillsClearSearch');
  
  // Render initially
  renderSkills();

  // Search input event
  searchInput.addEventListener('input', (e) => {
    ideState.skillsSearchQuery = e.target.value.toLowerCase().trim();
    if (ideState.skillsSearchQuery.length > 0) {
      clearSearchBtn.style.display = 'block';
    } else {
      clearSearchBtn.style.display = 'none';
    }
    renderSkills();
  });

  // Clear search
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    ideState.skillsSearchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderSkills();
  });

  // Filter tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      ideState.skillsFilter = tab.getAttribute('data-filter');
      renderSkills();
    });
  });
}

function renderSkills() {
  const displayGrid = document.getElementById('skillsDisplayGrid');
  displayGrid.innerHTML = '';
  
  const filtered = skillsData.filter(skill => {
    // Filter by category tab
    const categoryMatches = (ideState.skillsFilter === 'all') || (skill.category === ideState.skillsFilter);
    // Filter by search string
    const searchMatches = (ideState.skillsSearchQuery === '') || 
                          (skill.name.toLowerCase().includes(ideState.skillsSearchQuery)) || 
                          (skill.source.toLowerCase().includes(ideState.skillsSearchQuery));
    return categoryMatches && searchMatches;
  });

  if (filtered.length === 0) {
    displayGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-muted); font-family: var(--font-sans)">
        <i class="fa-solid fa-box-open" style="font-size: 24px; margin-bottom: 8px; display: block"></i>
        No matching skills found. Try another search.
      </div>
    `;
    return;
  }

  filtered.forEach(skill => {
    const cardEl = document.createElement('div');
    cardEl.className = 'skill-card-ide';
    cardEl.innerHTML = `
      <img src="${skill.icon}" class="skill-card-icon" alt="${skill.name}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='block'">
      <i class="fa-solid fa-cube text-accent" style="display:none; font-size:20px;"></i>
      <span class="skill-card-name">${skill.name}</span>
    `;
    cardEl.addEventListener('click', () => openSkillDetailModal(skill));
    displayGrid.appendChild(cardEl);
  });
}

// Open skill drawer modal
function openSkillDetailModal(skill) {
  const modal = document.getElementById('skillDetailModal');
  const modalIcon = document.getElementById('skillDetailIcon');
  const fallbackIcon = document.getElementById('skillDetailFallbackIcon');
  const nameEl = document.getElementById('skillDetailName');
  const categoryEl = document.getElementById('skillDetailCategory');
  const sourceEl = document.getElementById('skillDetailSource');
  const linkEl = document.getElementById('skillDetailLink');
  
  // Set details
  if (skill.icon) {
    modalIcon.src = skill.icon;
    modalIcon.style.display = 'block';
    fallbackIcon.style.display = 'none';
  } else {
    modalIcon.style.display = 'none';
    fallbackIcon.style.display = 'block';
  }
  
  nameEl.textContent = skill.name;
  
  let friendlyCategory = 'Other';
  if (skill.category === 'languages') friendlyCategory = 'Programming Language';
  else if (skill.category === 'frameworks') friendlyCategory = 'Framework / Library';
  else if (skill.category === 'databases') friendlyCategory = 'Database / Data API';
  else if (skill.category === 'ai-devops') friendlyCategory = 'AI / ML & DevOps';
  
  categoryEl.textContent = friendlyCategory;
  sourceEl.textContent = skill.source || 'Self-learned and implemented in practical development projects.';
  
  if (skill.link) {
    linkEl.href = skill.link;
    document.getElementById('skillLinkContainer').style.display = 'block';
  } else {
    document.getElementById('skillLinkContainer').style.display = 'none';
  }
  
  modal.classList.add('active');
}

function closeSkillDetailModal() {
  document.getElementById('skillDetailModal').classList.remove('active');
}

// 7. LINE NUMBERS GUTTER COMPUTATION
function setupGutterNumbers() {
  const gutter = document.getElementById('lineGutter');
  if (!gutter) return;
  
  gutter.innerHTML = '';
  
  const viewport = document.querySelector('.editor-viewport');
  const activeView = document.querySelector('.file-view.active');
  if (!activeView) return;
  
  // Approximate scroll height division to fit lines
  const height = activeView.scrollHeight;
  const lineCount = Math.max(Math.ceil(height / 22), 25);
  
  let gutterHtml = '';
  for (let i = 1; i <= lineCount; i++) {
    gutterHtml += `<div>${i}</div>`;
  }
  gutter.innerHTML = gutterHtml;
}

// 8. INTERACTIVE TERMINAL ENGINE
function setupTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const clearBtn = document.getElementById('terminalClearBtn');
  const toggleBtn = document.getElementById('terminalToggleBtn');
  
  // Clear button click
  clearBtn.addEventListener('click', () => {
    terminalHistory.innerHTML = '';
    if (ideState.inVimMode) {
      exitVimMode();
    } else {
      logToTerminalSystem('Terminal history cleared.', 'comment');
    }
  });

  // Toggle maximize/minimize click
  toggleBtn.addEventListener('click', () => {
    const bottomPanel = document.getElementById('bottomPanel');
    if (ideState.terminalHeight === 'normal') {
      bottomPanel.classList.add('maximized');
      ideState.terminalHeight = 'maximized';
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    } else if (ideState.terminalHeight === 'maximized') {
      bottomPanel.classList.remove('maximized');
      bottomPanel.classList.add('minimized');
      ideState.terminalHeight = 'minimized';
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    } else {
      bottomPanel.classList.remove('minimized');
      ideState.terminalHeight = 'normal';
      toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    }
    setTimeout(setupGutterNumbers, 350);
  });

  // Pane tabs switching
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const pane = tab.getAttribute('data-pane');
      document.querySelectorAll('.pane-view').forEach(p => p.classList.remove('active'));
      document.getElementById(`pane-${pane}`).classList.add('active');
      
      if (pane === 'terminal') {
        document.getElementById('terminalInput').focus();
      }
    });
  });

  // Execute terminal input on Enter
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputVal = terminalInput.value.trim();
      if (ideState.inVimMode) {
        handleVimCommand(inputVal);
        terminalInput.value = '';
      } else {
        if (inputVal.length > 0) {
          executeCommand(inputVal);
          terminalInput.value = '';
        }
      }
    }
  });
}

function logToTerminal(lineText, typeClass = '') {
  const terminalHistory = document.getElementById('terminalHistory');
  const lineEl = document.createElement('div');
  lineEl.className = `terminal-line ${typeClass}`;
  lineEl.textContent = lineText;
  terminalHistory.appendChild(lineEl);
  
  // Scroll to bottom
  const pane = document.getElementById('pane-terminal');
  pane.scrollTop = pane.scrollHeight;
}

function logToTerminalSystem(lineText, typeClass = 'comment') {
  logToTerminal(`[System] ${lineText}`, typeClass);
}

// 9. VIM / NEOVIM CONSOLE EMULATOR
function enterVimMode(filename = '') {
  ideState.inVimMode = true;
  document.getElementById('terminalHistory').innerHTML = '';
  document.querySelector('.terminal-prompt').style.display = 'none';
  
  if (filename === '') {
    // Show Vim Welcome page
    logToTerminal('~');
    logToTerminal('~');
    logToTerminal('~               NVIM - Neovim v0.9.1');
    logToTerminal('~');
    logToTerminal('~         highly extensible Vim-based text editor');
    logToTerminal('~');
    logToTerminal('~     type  :q<Enter>            to exit');
    logToTerminal('~     type  :help<Enter>         for help information');
    logToTerminal('~     type  :checkhealth<Enter>  to run checks');
    logToTerminal('~');
    logToTerminal('~');
    logToTerminal('~');
    logToTerminal('type :q to exit Neovim...', 'comment');
  } else {
    // Display File Mock edit buffer
    logToTerminal(`"sooriya/${filename}" [readonly]`);
    logToTerminal('~');
    if (filename === 'README.md') {
      logToTerminal('1 # Hi, I\'m Sooriya');
      logToTerminal('2 const role = "Go & System Engineer";');
      logToTerminal('3');
      logToTerminal('4 B.Tech IT student engineering high-performance search engines,');
      logToTerminal('5 clean full-stack web applications, and local RAG solutions.');
    } else if (filename === 'projects.go') {
      logToTerminal('1 package main');
      logToTerminal('2');
      logToTerminal('3 import "github.com/sooriya/portfolio/projects"');
      logToTerminal('4');
      logToTerminal('5 // Core projects: Searqon, UnbiasMe, Fogoe');
    } else {
      logToTerminal('1 {');
      logToTerminal('2   "profile": "sooriya",');
      logToTerminal('3   "skills": ["Go", "React", "Docker", "RAG"]');
      logToTerminal('4 }');
    }
    logToTerminal('~');
    logToTerminal('~');
    logToTerminal(`-- READONLY MODE -- Line 1 of 5 -- 100% --`, 'success');
  }
}

function exitVimMode() {
  ideState.inVimMode = false;
  document.getElementById('terminalHistory').innerHTML = '';
  document.querySelector('.terminal-prompt').style.display = 'block';
  logToTerminal('Exited Neovim. Returned to bash.', 'success');
  logToTerminalSystem('Terminal ready. Type \'help\' for options.', 'comment');
}

function handleVimCommand(input) {
  const cmd = input.trim();
  
  if (cmd === ':q' || cmd === ':q!' || cmd === ':qa') {
    exitVimMode();
  } else if (cmd === ':w' || cmd === ':wq') {
    logToTerminal('E45: \'readonly\' option is set (add ! to override)', 'error');
  } else if (cmd === ':help') {
    logToTerminal('~');
    logToTerminal('Neovim Help System Mock');
    logToTerminal('  - Type :q and hit Enter to exit Neovim.');
    logToTerminal('  - Read-only protection is enabled on workspace files.');
    logToTerminal('~');
  } else {
    logToTerminal(`Vim: Command not recognized: "${cmd}". Type :q to exit.`, 'error');
  }
}

// 10. BASH COMMAND INTERPRETER
function executeCommand(cmdString) {
  // Echo input
  logToTerminal(`sooriya@sooriya-pc:~$ ${cmdString}`, 'input-echo');
  
  ideState.terminalHistoryList.push(cmdString);
  
  const tokens = cmdString.split(' ');
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);
  
  switch (command) {
    case 'help':
      logToTerminal('Available commands:');
      logToTerminal('  help             - Display all workspace command summaries.');
      logToTerminal('  neofetch         - Print client specs and systems configuration.');
      logToTerminal('  skills           - Display text representation of technology proficiencies.');
      logToTerminal('  projects         - List operational full-stack engineering tools.');
      logToTerminal('  contact          - Output secure link connections.');
      logToTerminal('  cat [file]       - View editor content (e.g. cat projects.go).');
      logToTerminal('  vim / nvim [file]- Boot mock Neovim editor inside the terminal.');
      logToTerminal('  theme [dark/l]   - Toggle layout colors.');
      logToTerminal('  clear            - Wipe active console scroll history.');
      logToTerminal('  sudo [args...]   - Execute operations with administrator locks.');
      break;
      
    case 'neofetch':
      logToTerminal('       .---.          sooriya@sooriya-pc');
      logToTerminal('      /     \\         ------------------');
      logToTerminal('      \\.@-@./         OS: Linux (Workspace Node)');
      logToTerminal('      /`\\_/`\\         Kernel: VSCode-Core v1.90.0');
      logToTerminal('     //  _  \\\\        Shell: bash 5.1');
      logToTerminal('    | \\   _   / |     Uptime: 2h 45m');
      logToTerminal('     \\ /     \\ /      CPU: Ryzen 3 3200G (4 cores)');
      logToTerminal('      \\_______/       RAM: 8 GB');
      logToTerminal('                      Editor: Visual Studio Code');
      break;
      
    case 'clear':
      document.getElementById('terminalHistory').innerHTML = '';
      break;
      
    case 'skills':
      logToTerminal('--- TECHNICAL SKILLS PROFILE ---');
      const grouped = {};
      skillsData.forEach(s => {
        if (!grouped[s.category]) grouped[s.category] = [];
        grouped[s.category].push(s.name);
      });
      for (const cat in grouped) {
        logToTerminal(`${cat.toUpperCase()}: ${grouped[cat].join(', ')}`);
      }
      break;
      
    case 'projects':
      logToTerminal('--- SHIPPED APPLICATIONS ---');
      logToTerminal('1. SEARQON - self-hosted web intelligence crawler in Go.');
      logToTerminal('   Details: relevance engine, concurrency model, SQL indices.');
      logToTerminal('2. UNBIASME - psychology profile assessment AI tool.');
      logToTerminal('   Details: React frontend, Gemini backend analysis middleware.');
      logToTerminal('3. FOGOE CLI - scaffolding CLI manager.');
      logToTerminal('   Details: node.js bootstrap engine, zero-config scripts.');
      break;
      
    case 'contact':
      logToTerminal('--- CONTACT DIRECTORIES ---');
      logToTerminal('  Email: sooriya.work@gmail.com');
      logToTerminal('  Phone: +91 93803 25924');
      logToTerminal('  Github: https://github.com/Sooriya04');
      logToTerminal('  LinkedIn: https://www.linkedin.com/in/sooriyab/');
      break;
      
    case 'cat':
      if (args.length === 0) {
        logToTerminal('Error: Specify file name (e.g. cat projects.go)', 'error');
      } else {
        const target = args[0];
        if (ideState.openFiles.includes(target)) {
          openFileTab(target);
          logToTerminal(`Loaded file ${target} in editor window.`, 'success');
        } else {
          logToTerminal(`Error: File '${target}' not found in local directories.`, 'error');
        }
      }
      break;
      
    case 'vim':
    case 'nvim':
      const targetFile = args.length > 0 ? args[0] : '';
      enterVimMode(targetFile);
      break;
      
    case 'theme':
      if (args.length === 0) {
        logToTerminal('Usage: theme [dark / light]');
      } else {
        const themeVal = args[0].toLowerCase();
        if (themeVal === 'light' || themeVal === 'l') {
          setIDETheme('light');
          logToTerminal('Applied Light VS Code theme layout.', 'success');
        } else {
          setIDETheme('dark');
          logToTerminal('Applied Dark VS Code theme layout.', 'success');
        }
      }
      break;
      
    case 'sudo':
      logToTerminal('sooriya is not in the sudoers file. This incident will be reported.', 'error');
      break;
      
    default:
      logToTerminal(`bash: ${command}: command not found. Type 'help' for options.`, 'error');
  }
}

// 11. REAL GITHUB CONTRIBUTION CHART FETCH
async function setupContributionChart() {
  const chart = document.getElementById('contribChart');
  if (!chart) return;
  
  // Set fallback simulated data first in case the API is slow/blocked
  renderFallbackChart();

  try {
    const response = await fetch('https://github-contributions-api.jogruber.de/v4/Sooriya04');
    if (!response.ok) throw new Error('API fetch failed');
    
    const data = await response.json();
    if (!data || !data.contributions) throw new Error('Invalid data format');

    // Calculate total commits across all recorded years
    let totalCommits = 0;
    if (data.total) {
      Object.keys(data.total).forEach(year => {
        totalCommits += data.total[year];
      });
    }

    // Find the latest year (e.g. 2026) and its contribution count
    const years = data.total ? Object.keys(data.total).sort() : [];
    const latestYear = years.length > 0 ? years[years.length - 1] : '2026';
    const latestYearContributions = data.total && data.total[latestYear] ? data.total[latestYear] : 135;

    // Dynamically update stats DOM nodes if they exist
    const commitsCountEl = document.getElementById('gitCommitsCount');
    if (commitsCountEl) {
      commitsCountEl.textContent = `${totalCommits}+`;
    }

    const contribsCountEl = document.getElementById('gitContributionsCount');
    if (contribsCountEl) {
      // Offset with private commits if they exist on Github profile but not public API (e.g., 315 total vs 135 public)
      const offsetPrivate = 180; 
      contribsCountEl.textContent = latestYearContributions + offsetPrivate;
    }

    const contribsLabelEl = document.getElementById('gitContributionsLabel');
    if (contribsLabelEl) {
      contribsLabelEl.textContent = `${latestYear} Contributions`;
    }

    const chartTitleEl = document.getElementById('chartYearLabel');
    if (chartTitleEl) {
      const offsetPrivate = 180;
      chartTitleEl.textContent = `${latestYearContributions + offsetPrivate} contributions in ${latestYear}`;
    }

    // Render calendar cells from the last 364 days of contributions
    const recentContribs = data.contributions.slice(-364);
    chart.innerHTML = '';
    
    for (let c = 0; c < 52; c++) {
      const colEl = document.createElement('div');
      colEl.className = 'chart-col';
      
      for (let r = 0; r < 7; r++) {
        const index = c * 7 + r;
        const contrib = recentContribs[index] || { count: 0, level: 0, date: '' };
        const cellEl = document.createElement('div');
        
        let levelClass = '';
        if (contrib.level === 1) levelClass = 'l1';
        else if (contrib.level === 2) levelClass = 'l2';
        else if (contrib.level >= 3) levelClass = 'l3';
        
        cellEl.className = `chart-cell ${levelClass}`;
        cellEl.setAttribute('title', `${contrib.count} contributions on ${contrib.date || 'unknown'}`);
        colEl.appendChild(cellEl);
      }
      chart.appendChild(colEl);
    }
  } catch (error) {
    console.warn('Unable to load live GitHub data, using fallback representation:', error);
  }
}

function renderFallbackChart() {
  const chart = document.getElementById('contribChart');
  if (!chart) return;
  chart.innerHTML = '';
  for (let c = 0; c < 52; c++) {
    const colEl = document.createElement('div');
    colEl.className = 'chart-col';
    for (let r = 0; r < 7; r++) {
      const cellEl = document.createElement('div');
      const rand = Math.random();
      let activityClass = '';
      if (rand > 0.85) activityClass = 'l3';
      else if (rand > 0.65) activityClass = 'l2';
      else if (rand > 0.35) activityClass = 'l1';
      cellEl.className = `chart-cell ${activityClass}`;
      cellEl.setAttribute('title', `Simulated contributions recorded.`);
      colEl.appendChild(cellEl);
    }
    chart.appendChild(colEl);
  }
}

// 12. TYPING ANIMATION (README ROLE)
function startTypingEffect() {
  const typedEl = document.getElementById('typed-role');
  if (!typedEl) return;
  
  const roles = [
    '"MERN Developer";',
    '"UI/UX Designer";',
    '"Go & System Engineer";',
    '"AI Integration Developer";',
    '"RAG Architect";'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentText = roles[roleIndex];
    
    if (isDeleting) {
      typedEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let speed = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentText.length) {
      speed = 1800; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400; // Small pause before next word
    }
    
    setTimeout(type, speed);
  }
  
  type();
}

// 13. LAYOUT THEME CONTROL
function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    if (ideState.theme === 'dark') {
      setIDETheme('light');
    } else {
      setIDETheme('dark');
    }
  });
}

function setIDETheme(themeName) {
  ideState.theme = themeName;
  document.body.setAttribute('data-theme', themeName);
  
  const toggleIcon = document.querySelector('#themeToggle i');
  if (themeName === 'light') {
    toggleIcon.className = 'fa-solid fa-sun';
  } else {
    toggleIcon.className = 'fa-solid fa-moon';
  }
}

// 14. WEB3FORMS CONTACT FORM SUBMISSION
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    feedback.className = 'form-feedback-message';
    feedback.textContent = 'Executing POST API submit... Please wait.';
    feedback.style.display = 'block';
    
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const resData = await response.json();
      
      if (response.ok && resData.success) {
        feedback.className = 'form-feedback-message success';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Form compiled successfully! Message sent.';
        form.reset();
        logToTerminalSystem('Form compiled successfully! POST request completed (200 OK).', 'success');
      } else {
        throw new Error(resData.message || 'API rejected POST request.');
      }
    } catch (err) {
      feedback.className = 'form-feedback-message error';
      feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Compilation failed: ${err.message}`;
      logToTerminalSystem(`API response error: ${err.message}`, 'error');
    }
    
    // Auto-hide feedback after 6 seconds
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 6000);
  });
}

// CV Download Trigger
function triggerDownload() {
  alert("CV download initialized (CV placeholder configuration). Verify CV filepath connection.");
  logToTerminalSystem("cv_download_stream initialized. Connection: standard_out.", "success");
}