  <script>
        // Mobile Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            });
        });

        // AI Chatbot
        function openAIChat() {
            document.getElementById('aiModal').style.display = 'flex';
            document.getElementById('userInput').focus();
        }

        function closeAIChat() {
            document.getElementById('aiModal').style.display = 'none';
        }

        function sendMessage() {
            const input = document.getElementById('userInput');
            const chatBody = document.getElementById('chatBody');
            if (!input.value.trim()) return;

            const userMsg = document.createElement('div');
            userMsg.className = 'message user-msg';
            userMsg.textContent = input.value;
            chatBody.appendChild(userMsg);

            input.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                const replies = [
                    "Thank you for your message! How can I assist you with programming or AI?",
                    "I'm here to help you on your tech journey. What would you like to know?",
                    "Great question! Would you like tips for the AHYEL Tech Fellowship?"
                ];
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai-msg';
                aiMsg.textContent = replies[Math.floor(Math.random() * replies.length)];
                chatBody.appendChild(aiMsg);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 800);
        }

        // Enter key support
        document.getElementById('userInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    </script>
