// ====== Mobile nav toggle ======
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ====== Smooth scroll for CTA anchors ======
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav on selection
      nav?.classList.remove('active');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

// ====== Contact form (client-side status only) ======
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm && contactStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple validation
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !msg) {
      contactStatus.textContent = 'Please fill out all fields.';
      contactStatus.style.color = '#c9a227';
      return;
    }
    contactStatus.textContent = 'Thanks! We\'ll get back to you shortly.';
    contactStatus.style.color = '#9a9a9a';
    contactForm.reset();
  });
}

// ====== Chatbot ======
const chatbot = document.getElementById('chatbot');
const openChatBtn = document.getElementById('openChat');
const closeChatBtn = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendMessage');
const chatContent = document.getElementById('chatContent');
const userMessageInput = document.getElementById('userMessage');

const openChat = () => {
  if (!chatbot) return;
  chatbot.hidden = false;
  userMessageInput?.focus();
};
const closeChat = () => {
  if (!chatbot) return;
  chatbot.hidden = true;
};

openChatBtn?.addEventListener('click', openChat);
closeChatBtn?.addEventListener('click', closeChat);

sendBtn?.addEventListener('click', () => {
  const text = userMessageInput.value.trim();
  if (!text) return;
  appendUser(text);
  userMessageInput.value = '';
  setTimeout(() => appendBot(autoReply(text)), 500);
});

userMessageInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});

function appendUser(text) {
  const div = document.createElement('div');
  div.className = 'user-msg';
  div.textContent = text;
  chatContent.appendChild(div);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendBot(text) {
  const div = document.createElement('div');
  div.className = 'bot-msg';
  div.textContent = text;
  chatContent.appendChild(div);
  chatContent.scrollTop = chatContent.scrollHeight;
}

function autoReply(text) {
  const t = text.toLowerCase();
  if (t.includes('price') || t.includes('cost') || t.includes('rate')) {
    return 'Share your service type, scope, and timeline — we\'ll quote within 24h.';
  }
  if (t.includes('time') || t.includes('timeline') || t.includes('delivery')) {
    return 'Typical delivery is 2–7 days depending on scope. Rush options available.';
  }
  if (t.includes('service') || t.includes('services')) {
    return 'We offer design, editing, web/app UI, and pro shoots. What do you need?';
  }
  return 'Got it. We\'ll guide you — feel free to share more details.';
}
