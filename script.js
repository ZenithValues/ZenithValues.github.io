// ====== SIDEBAR ======
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

// ====== DROPDOWN ======
function toggleDropdown(event, el) {
  event.preventDefault();
  const menu = el.nextElementSibling;
  const arrow = el.querySelector('.arrow');

  menu.classList.toggle('open');
  if (arrow) arrow.classList.toggle('open');
}

// ====== FILTER BY RARITY ======
function filterRarity(rarity, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Filter cards
  const cards = document.querySelectorAll('.card, .enchant-card');
  cards.forEach(card => {
    if (rarity === 'all' || card.getAttribute('data-rarity') === rarity) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  // Filter rarity sections (on towers page)
  const sections = document.querySelectorAll('.grid-section[id]');
  sections.forEach(section => {
    const id = section.getAttribute('id');
    if (rarity === 'all') {
      section.style.display = '';
    } else if (id === rarity) {
      section.style.display = '';
    } else {
      section.style.display = 'none';
    }
  });

  // Show ad zones regardless
  document.querySelectorAll('.card-ad').forEach(ad => {
    ad.style.display = '';
  });
}

// ====== SEARCH FILTER ======
function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card, .enchant-card');

  cards.forEach(card => {
    const name = card.querySelector('.card-name, .enchant-name');
    const rarity = card.getAttribute('data-rarity') || '';
    const text = (name ? name.textContent : '') + ' ' + rarity;

    if (text.toLowerCase().includes(query) || query === '') {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// ====== TRADE CALCULATOR (Placeholder) ======
function openItemPicker(slot) {
  // Placeholder — would open a modal to select items
  slot.style.borderColor = '#00fff0';
  slot.style.borderStyle = 'solid';
  slot.querySelector('.trade-slot-icon').textContent = '?';
  slot.querySelector('span:last-child').textContent = 'Placeholder';
}

function calculateTrade() {
  const verdict = document.querySelector('.result-verdict');
  const diff = document.querySelector('.result-diff');

  // Random placeholder result
  const results = [
    { text: 'W', cls: 'win', msg: 'You\'re winning by ~15%' },
    { text: 'L', cls: 'lose', msg: 'You\'re losing by ~22%' },
    { text: 'FAIR', cls: 'fair', msg: 'Trade is roughly even' }
  ];

  const r = results[Math.floor(Math.random() * results.length)];

  verdict.textContent = r.text;
  verdict.className = 'result-verdict ' + r.cls;
  diff.textContent = r.msg;
}

function resetTrade() {
  // Reset slots
  document.querySelectorAll('.trade-slot').forEach(slot => {
    slot.style.borderColor = '';
    slot.style.borderStyle = '';
    slot.querySelector('.trade-slot-icon').textContent = '+';
    slot.querySelector('span:last-child').textContent = 'Add Item';
  });

  // Reset result
  const verdict = document.querySelector('.result-verdict');
  const diff = document.querySelector('.result-diff');
  if (verdict) {
    verdict.textContent = '---';
    verdict.className = 'result-verdict';
  }
  if (diff) diff.textContent = 'Add items to compare';
}

// ====== CLOSE SIDEBAR ON LINK CLICK (Mobile) ======
document.querySelectorAll('.dropdown-menu a, .sidebar-nav > li > a:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('overlay').classList.remove('show');
    }
  });
});
