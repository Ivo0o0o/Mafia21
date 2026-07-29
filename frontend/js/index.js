// Малък frontend bootstrap за демонстрация (index.js)
// Проектиран да работи директно когато отвориш frontend/index.html (file://)

(function () {
  // Безопасни селектори — работят дори ако скриптът се зареди преди DOM
  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

  const logEl = $('#log');
  const startBtn = $('#startBtn');
  const demoBtn = $('#demoBtn');
  const gameSection = $('#game');
  const stateEl = $('#state');
  const fileNote = $('#fileNote');

  function appendLog(msg) {
    if (!logEl) return;
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    logEl.appendChild(p);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function safeInit() {
    if (!startBtn || !demoBtn || !gameSection || !stateEl) {
      // Ако елементите не са налични — опитай пак след кратко забавяне
      setTimeout(safeInit, 50);
      return;
    }

    startBtn.addEventListener('click', () => {
      appendLog('Инициализация на играта...');
      gameSection.classList.remove('hidden');
      stateEl.textContent = 'Игрова логика: готова (демо)';
      appendLog('Играта е стартирана — това е минимален frontend за демонстрация.');
    });

    demoBtn.addEventListener('click', () => {
      appendLog('Правя демо ход...');
      const rnd = Math.floor(Math.random() * 100);
      stateEl.textContent = `Демо резултат: ${rnd}`;
    });

    // Инициален лог
    appendLog('Frontend зареден.');

    // Ако файлът се отвори като file:// покажи кратко съобщение
    try {
      if (window && window.location && window.location.protocol === 'file:') {
        if (fileNote) fileNote.textContent = 'Забележка: отваряш файла през file:// — всичко трябва да работи локално без web-сървър.';
        appendLog('Заредено през file:// — работи локално.');
      } else {
        if (fileNote) fileNote.textContent = 'Заредено през web протокол. За локално отваряне използвай директорията frontend и отвори index.html.';
      }
    } catch (e) {
      /* ignore */
    }
  }

  // Стартираме когато DOM е ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInit);
  } else {
    safeInit();
  }
})();
