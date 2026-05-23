// Mobile Toggle Navigation Menu
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

// Smooth Scroll Controller
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Loop Text Array Typing Animation Layout logic
const texts = ["Software Developer", "AI Enthusiast", "Community Builder", "Future Tech Leader"];
let count = 0, index = 0;
const typingEl = document.getElementById("typing");

function type() {
    if (count === texts.length) count = 0;
    const current = texts[count];
    typingEl.textContent = current.slice(0, ++index);

    if (index === current.length) {
        count++;
        index = 0;
        setTimeout(type, 1800); // Hold words view display state duration
    } else {
        setTimeout(type, 70); // Regular keystroke pace speed delta
    }
}

// Open Dialog Container Panel View smoothly
function openAIChat(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('aiModal');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML = `<div class="message ai-msg">Hello! I'm Abubakar's AI Assistant. How can I help you today?</div>`;
    
    setTimeout(() => {
        document.getElementById('userInput').focus();
    }, 50);
}

// Hide Dialog Modal Component panel 
function closeAIChat() {
    const modal = document.getElementById('aiModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Chat Dialog Response Logic Simulation Engine
function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const userText = input.value.trim();
    if (!userText) return;

    // Render User Text bubble choice
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-msg';
    userMsg.textContent = userText;
    chatBody.appendChild(userMsg);
    chatBody.scrollTop = chatBody.scrollHeight;

    const normalizedText = userText.toLowerCase();
    input.value = '';

    // Automated logic query check response routine delay triggers
    setTimeout(() => {
        let reply = "Thank you! How else can I assist you with checking Abubakar's portfolio metrics?";
        if (normalizedText.includes("ahyel")) {
            reply = "Abubakar is highly passionate and targeted on qualifying for the AHYEL Tech Fellowship 2026 to maximize his professional community scope development tracks!";
        } else if (normalizedText.includes("project")) {
            reply = "He engineered 'Hausa Radio Pro' to bridge broadcasting gaps, as well as this responsive AI Community assistant container layout page!";
        } else if (normalizedText.includes("skill")) {
            reply = "Abubakar exhibits functional capabilities in core web systems, problem-solving, version control with Git, and custom generative prompt frameworks.";
        }

        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai-msg';
        aiMsg.textContent = reply;
        chatBody.appendChild(aiMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// Enter key listeners monitoring for chat inputs
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Close dialogue module instantly if selecting outside modal area bounds
window.addEventListener('click', (e) => {
    const modal = document.getElementById('aiModal');
    if (e.target === modal) {
        closeAIChat();
    }
});

// Start animation once assets fully parse onto window scope
window.onload = type;
