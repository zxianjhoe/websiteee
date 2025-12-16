const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const editJobBtn = document.getElementById('editJobBtn');
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');
const jobTitleEl = document.querySelector('.job-title');
const msgBox = document.getElementById('message');
const counter = document.getElementById('counter');
const form = document.getElementById('messageForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const dateDisplay = document.getElementById('dateDisplay');
const quoteBtn = document.getElementById('quoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
}

if (editJobBtn && jobTitleEl) {
  editJobBtn.addEventListener('click', () => {
    const current = jobTitleEl.textContent.trim();
    const next = window.prompt('Enter new job title:', current || '');
    if (next !== null) {
      const cleaned = next.trim();
      if (cleaned.length > 0) jobTitleEl.textContent = cleaned;
    }
  });
}

if (toggleSkillsBtn && skillsSection) {
  toggleSkillsBtn.addEventListener('click', () => {
    const isHidden = skillsSection.style.display === 'none';
    skillsSection.style.display = isHidden ? '' : 'none';
    toggleSkillsBtn.textContent = isHidden ? 'Hide Skills' : 'Show Skills';
  });
}

if (msgBox && counter) {
  const max = msgBox.maxLength || 200;
  const updateCounter = () => {
    const remaining = Math.max(0, max - msgBox.value.length);
    counter.textContent = String(remaining);
  };
  msgBox.addEventListener('input', updateCounter);
  updateCounter();
}

if (form) {
  form.addEventListener('submit', (e) => {
    const nameOk = nameField && nameField.value.trim().length > 0;
    const emailOk = emailField && emailField.value.trim().length > 0;
    if (!nameOk || !emailOk) {
      e.preventDefault();
      window.alert('Please fill in both Name and Email.');
      return;
    }
    window.alert('Form submitted successfully!');
  });
}

if (dateDisplay) {
  const opts = { year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-PH', opts);
  dateDisplay.textContent = today;
}

if (quoteBtn && quoteDisplay) {
  const quotes = [
    'Zhanjoe',
    'Dela Cruz',
    'Hi!',
    'Sir.',
    'Ang hirap mag code',
    'lala'
  ];
  const rnd = () => Math.floor(Math.random() * quotes.length);
  quoteBtn.addEventListener('click', () => {
    quoteDisplay.textContent = quotes[rnd()];
  });
}
