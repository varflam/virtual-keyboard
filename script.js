const BODY = document.body;
const TEXTAREA = document.createElement('textarea');

TEXTAREA.classList.add('keyboard__textarea');
BODY.append(TEXTAREA);

const BOARD = document.createElement('div');
BOARD.classList.add('keyboard__board');
BODY.append(BOARD);

const KEYS_ARRAY = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', 'Whitespace', 'Alt', '◄', '▼', '►', 'Ctrl'];

const appendKeys = () => {
  KEYS_ARRAY.forEach((key) => {
    const KEY_ELEMENT = document.createElement('span');
    KEY_ELEMENT.classList.add('keyboard__key');
    KEY_ELEMENT.classList.add(`keyboard__${key.toLowerCase()}`);
    KEY_ELEMENT.textContent = key.toLowerCase();
    BOARD.append(KEY_ELEMENT);
  });
};

appendKeys();

document.addEventListener('keydown', (e) => {
  const BOARD_KEY = document.querySelector(`.keyboard__${e.key}`);
  BOARD_KEY.classList.add('keyboard__key_active');
});

document.addEventListener('keyup', (e) => {
  const BOARD_KEY = document.querySelector(`.keyboard__${e.key}`);
  BOARD_KEY.classList.remove('keyboard__key_active');
});
