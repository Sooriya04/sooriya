/* ─── REAL TERMINAL PORTFOLIO ─── index.js ─── */

'use strict';

/* ==============================
   DATA PAYLOADS
   ============================== */
const ALIASES = {
    'ls': 'projects',
    'dir': 'projects',
    'whoami': 'about',
    'cls': 'clear'
};

const PROJECTS = [
    { name: 'UnbiasMe',     desc: 'Psychology-based web app detecting cognitive biases using AI. Includes quizzes & daily insights.', tech: 'Node.js, MongoDB, AI', link: 'https://github.com/Sooriya04/unbiasme' },
    { name: 'Restmancer',   desc: 'Developer platform simulating realistic REST APIs with random but meaningful data.', tech: 'Node.js, Express, Faker.js', link: 'https://restmancer.vercel.app/' },
    { name: 'Fogoe',        desc: 'Lightweight Node.js CLI for bootstrapping backend projects (Express/Fastify) with sensible defaults.', tech: 'Node.js CLI, npm', link: 'https://www.npmjs.com/package/fogoe' }
];

const SKILLS = {
    'Frontend':  ['HTML', 'CSS', 'JavaScript', 'React', 'Angular JS', 'Bootstrap', 'Sass'],
    'Backend':   ['Node.js', 'Express.js', 'Flask', 'GraphQL', 'REST API'],
    'Database':  ['MongoDB', 'PostgreSQL', 'MySQL'],
    'Languages': ['Python', 'Java', 'C', 'C++', 'C#', 'PHP'],
    'DevOps':    ['Git', 'Docker', 'Jenkins', 'Ubuntu', 'Deployment', '.NET'],
    'AI & ML':   ['Gemini AI', 'AI Integration', 'LLM', 'OLLAMA', 'RAG', 'Machine Learning']
};

const CONTACT = [
    { key: 'Email',    val: 'sooriya.work@gmail.com', link: 'mailto:sooriya.work@gmail.com' },
    { key: 'Phone',    val: '+91 93803 25924', link: 'tel:+919380325924' },
    { key: 'GitHub',   val: 'github.com/Sooriya04', link: 'https://github.com/Sooriya04' },
    { key: 'LinkedIn', val: 'linkedin.com/in/sooriyab', link: 'https://www.linkedin.com/in/sooriyab/' },
    { key: 'Location', val: 'India', link: null }
];

/* ==============================
   SYSTEM INIT
   ============================== */
const outputEl = document.getElementById('terminal-output');
const inputEl  = document.getElementById('cmd-input');
const container= document.getElementById('terminal-wrapper');

// Focus handling
document.addEventListener('click', () => {
    if(window.getSelection().toString() === '') {
        inputEl.focus();
    }
});

// Live clock string
function updateClock() {
    const el = document.getElementById('clock');
    if (!el) return;
    const now = new Date();
    const p = n => String(n).padStart(2,'0');
    el.textContent = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
}
setInterval(updateClock, 1000); updateClock();

/* ==============================
   EXECUTION ENGINE (TYPEWRITER)
   ============================== */

function scrollToBottom() {
    container.scrollTo(0, container.scrollHeight);
}

// HTML-aware typewriter effect
async function typeHTML(htmlString, targetElement, charDelay = 8) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    
    async function typeNode(node, parent) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.nodeValue;
            const textNode = document.createTextNode('');
            parent.appendChild(textNode);
            for (let i = 0; i < text.length; i++) {
                textNode.nodeValue += text[i];
                if (text[i] !== ' ') {
                    // skip delay for spaces to make it slightly faster overall
                    await new Promise(r => setTimeout(r, charDelay));
                }
                scrollToBottom();
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = document.createElement(node.tagName);
            for (let attr of node.attributes) {
                el.setAttribute(attr.name, attr.value);
            }
            parent.appendChild(el);
            for (let child of node.childNodes) {
                await typeNode(child, el);
            }
        }
    }
    
    await typeNode(tempDiv, targetElement);
}

async function printHistory(cmdStr) {
    const safeStr = cmdStr.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const div = document.createElement('div');
    div.className = 'cmd-history-line';
    div.innerHTML = `<span class="prompt"><span class="user">sooriya@dev</span>:<span class="path">~</span><span class="symbol">$</span></span> <span class="cmd-text">${safeStr}</span>`;
    outputEl.appendChild(div);
    scrollToBottom();
}

let isTyping = false;

async function execute(cmdStr) {
    if (isTyping) return;
    isTyping = true;
    inputEl.disabled = true;

    await printHistory(cmdStr);
    
    let args = cmdStr.trim().split(/\s+/);
    let cmd = args[0].toLowerCase();

    // Check aliases
    if (ALIASES[cmd]) cmd = ALIASES[cmd];

    if (cmd === '') {
        isTyping = false;
        inputEl.disabled = false;
        inputEl.focus();
        scrollToBottom();
        return;
    }

    let output = '';

    // NOTE: avoiding newlines in HTML strings because `#terminal-output` has `white-space: pre-wrap`, 
    // which caused excessive line breaks in the layout previously.
    switch(cmd) {
        case 'help':
            output = `<div class="ansi-bold ansi-yellow" style="margin-bottom:8px">Available Commands:</div>` +
                     `<div class="table">` +
                     `<div class="table-row"><span class="table-key">about</span><span>Who is Sooriya?</span></div>` +
                     `<div class="table-row"><span class="table-key">projects</span><span>View my latest work (aliases: ls, dir)</span></div>` +
                     `<div class="table-row"><span class="table-key">skills</span><span>List technical competencies</span></div>` +
                     `<div class="table-row"><span class="table-key">contact</span><span>Get in touch / Social links</span></div>` +
                     `<div class="table-row"><span class="table-key">clear</span><span>Clear the terminal output (alias: cls)</span></div>` +
                     `<div class="table-row"><span class="table-key">gui</span><span>Switch to graphical interface (WIP)</span></div>` +
                     `</div>`;
            break;

        case 'about':
            output = `<div class="ansi-title">Hi, I'm Sooriya.</div>` + 
                     `<div class="ansi-cyan ansi-bold" style="margin-bottom:12px;">Full-Stack Developer & UI/UX Designer</div>` +
                     `<div class="ansi-yellow" style="margin-bottom:12px; font-size: 13px;">MERN Developer | DevOps & Deployment Learner | RAG Developer | AI Integration Developer</div>` +
                     `<div style="max-width:650px; color:var(--grey)">B.Tech IT student building clean interfaces, full-stack apps, and practical AI tools. I love creating simple, useful, and well-designed digital experiences. Always exploring the intersection of robust backends, snappy frontends, and intelligent AI integrations.</div>`;
            break;

        case 'projects':
            output = `<div class="ansi-title">./projects</div><div style="margin-bottom:12px; color:var(--grey)">Type link to visit.</div>`;
            PROJECTS.forEach((p, i) => {
                output += `<div style="margin-bottom:16px;">` +
                          `<div style="display:flex; gap:12px; align-items:center;">` +
                          `<span class="ansi-green ansi-bold">[0${i+1}] ${p.name}</span>` +
                          `<a href="${p.link}" target="_blank" style="color:var(--cyan); font-size:12px; text-decoration:none;">[ <span style="text-decoration:underline;">Visit</span> ↗ ]</a>` +
                          `</div>` +
                          `<div style="color:var(--white); padding-left:14px; margin:4px 0; border-left:2px solid var(--border)">${p.desc}</div>` +
                          `<div style="color:var(--yellow); font-size:12px; padding-left:14px;">Tech: ${p.tech}</div>` +
                          `</div>`;
            });
            break;

        case 'skills':
            output = `<div class="ansi-title">./skills</div>`;
            Object.keys(SKILLS).forEach(category => {
                const badgeStr = SKILLS[category].map(s => `<span style="background:var(--border); color:var(--white); padding:2px 6px; border-radius:3px; margin:2px 4px 2px 0; display:inline-block; font-size:12px;">${s}</span>`).join('');
                output += `<div style="margin-bottom:12px; margin-top:8px;">` +
                          `<div class="ansi-cyan ansi-bold" style="margin-bottom:4px;">${category}</div>` +
                          `<div style="padding-left:12px;">${badgeStr}</div>` +
                          `</div>`;
            });
            break;

        case 'contact':
            output = `<div class="ansi-title">Communication Protocols</div><div class="table" style="margin-top:12px;">`;
            CONTACT.forEach(c => {
                const val = c.link ? `<a href="${c.link}" target="_blank" style="color:var(--white); text-decoration:underline;">${c.val}</a>` : c.val;
                output += `<div class="table-row"><span class="table-key">${c.key}</span><span>${val}</span></div>`;
            });
            output += `</div><div class="ansi-grey" style="margin-top:12px;">// Awaiting your transmission...</div>`;
            break;

        case 'clear':
            outputEl.innerHTML = '';
            isTyping = false;
            inputEl.disabled = false;
            inputEl.focus();
            return;

        case 'gui':
            output = `<span class="ansi-red">Error:</span> GUI module missing. Terminal is the only way of life.`;
            break;
            
        case 'sudo':
            output = `<span class="ansi-red">sooriya is not in the sudoers file. This incident will be reported.</span>`;
            break;

        case 'echo':
            output = args.slice(1).join(' ').replace(/</g, "&lt;").replace(/>/g, "&gt;");
            break;

        default:
            output = `<span class="ansi-red">bash: ${cmd}: command not found</span> <span class="ansi-grey">Type</span> <span class="ansi-yellow">help</span> <span class="ansi-grey">to see available commands.</span>`;
    }

    if (output) {
        const resultContainer = document.createElement('div');
        resultContainer.className = 'cmd-result';
        outputEl.appendChild(resultContainer);
        // Type out the result with HTML support
        await typeHTML(output, resultContainer, 5); 
    }

    isTyping = false;
    inputEl.disabled = false;
    inputEl.focus();
    inputEl.value = '';
    scrollToBottom();
}


/* ==============================
   INPUT LISTENER
   ============================== */
inputEl.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const val = this.value;
        this.value = '';
        execute(val);
    }
});


/* ==============================
   BOOT SEQUENCE
   ============================== */
const bootLines = [
    `<span style="color:var(--green)">[ OK ]</span> Starting <span style="color:var(--white)">portfolio.service</span>...`,
    `<span style="color:var(--green)">[ OK ]</span> Loading profile: <span style="color:var(--cyan)">~/.bashrc</span>`,
    `<span style="color:var(--cyan)">[INFO]</span> Initializing interactive shell environment`,
    `<span style="color:var(--cyan)">[INFO]</span> Node: <span style="color:var(--white)">sooriya</span> | OS: <span style="color:var(--white)">B.Tech IT</span>`,
    `<span style="color:var(--yellow)">[DEPS]</span> Resolved 35 skill dependencies...`,
    `<span class="ansi-bold ansi-green" style="font-size:24px; letter-spacing:-1px; margin-top:8px; display:block;">sooriya@dev UI</span>`,
    `<span style="color:var(--grey)">Welcome to my interactive portfolio. v2.0.0</span>`,
    `<span style="margin-top:8px; display:block;">Type <span class="ansi-bold ansi-yellow">help</span> to see how to navigate.</span>`,
];

async function runBoot() {
    isTyping = true;
    inputEl.disabled = true;
    
    for (let i = 0; i < bootLines.length; i++) {
        const lineContainer = document.createElement('div');
        lineContainer.style.lineHeight = '1.6';
        outputEl.appendChild(lineContainer);
        
        await typeHTML(bootLines[i], lineContainer, i > 5 ? 10 : 15); // Faster typing
        await new Promise(r => setTimeout(r, 100)); // Small delay between lines
    }
    
    // Add extra margin at the end of boot
    const spacer = document.createElement('div');
    spacer.style.height = '16px';
    outputEl.appendChild(spacer);
    
    isTyping = false;
    inputEl.disabled = false;
    inputEl.focus();
    scrollToBottom();
}

// Start
runBoot();