// Малък frontend bootstrap за демонстрация (index.js)
// Файловете се зареждат от frontend/index.html

const logEl = document.getElementById('log');
const startBtn = document.getElementById('startBtn');
const demoBtn = document.getElementById('demoBtn');
const gameSection = document.getElementById('game');
const stateEl = document.getElementById('state');

function appendLog(msg) {
  const p = document.createElement('p');
  p.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  logEl.appendChild(p);
  logEl.scrollTop = logEl.scrollHeight;
}

startBtn.addEventListener('click', () => {
  appendLog('Инициализация на играта...');
  gameSection.classList.remove('hidden');
  stateEl.textContent = 'Игрова логика: готова (демо)';
  appendLog('Играта е стартирана — това е минимален frontend за демонстрация.');
});

demoBtn.addEventListener('click', () => {
  appendLog('Правя демо ход...');
  // Примерна промяна на състоянието
  const rnd = Math.floor(Math.random() * 100);
  stateEl.textContent = `Демо резултат: ${rnd}`;
});

// Инициален лог
appendLog('Frontend зареден.');
