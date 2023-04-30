const BODY = document.body;

const HEADER = document.createElement('h1');
HEADER.classList.add('keyboard__header');
HEADER.textContent = 'Virtual keyboard';
BODY.append(HEADER);

const TEXTAREA = document.createElement('textarea');

TEXTAREA.classList.add('keyboard__textarea');
BODY.append(TEXTAREA);

const BOARD = document.createElement('div');
BOARD.classList.add('keyboard__board');
BODY.append(BOARD);

const SPECIFICATION = document.createElement('p');
SPECIFICATION.classList.add('keyboard__spec');
SPECIFICATION.textContent = 'Keyboard is created on Windows';
BODY.append(SPECIFICATION);

const KEYS_ARRAY = [
  {
    eng: '`',
    ru: 'ё',
    engShifted: '~',
    ruShifted: 'Ё',
    code: 'Backquote',
  },
  {
    eng: '1',
    ru: '1',
    engShifted: '!',
    ruShifted: '!',
    code: 'Digit1',
  },
  {
    eng: '2',
    ru: '2',
    engShifted: '@',
    ruShifted: '',
    code: 'Digit2',
  },
  {
    eng: '3',
    ru: '3',
    engShifted: '#',
    ruShifted: '',
    code: 'Digit3',
  },
  {
    eng: '4',
    ru: '4',
    engShifted: '$',
    ruShifted: '',
    code: 'Digit4',
  },
  {
    eng: '5',
    ru: '5',
    engShifted: '%',
    ruShifted: 'Ё',
    code: 'Digit5',
  },
  {
    eng: '6',
    ru: '6',
    engShifted: '^',
    ruShifted: '',
    code: 'Digit6',
  },
  {
    eng: '7',
    ru: '7',
    engShifted: '&',
    ruShifted: '',
    code: 'Digit7',
  },
  {
    eng: '8',
    ru: '8',
    engShifted: '*',
    ruShifted: '',
    code: 'Digit8',
  },
  {
    eng: '9',
    ru: '9',
    engShifted: '(',
    ruShifted: '',
    code: 'Digit9',
  },
  {
    eng: '0',
    ru: '0',
    engShifted: ')',
    ruShifted: 'Ё',
    code: 'Digit0',
  },
  {
    eng: '-',
    ru: '',
    engShifted: '_',
    ruShifted: '',
    code: 'Minus',
  },
  {
    eng: '=',
    ru: '',
    engShifted: '+',
    ruShifted: 'Ё',
    code: 'Equal',
  },
  {
    eng: 'Backspace',
    ru: 'Backspace',
    engShifted: 'Backspace',
    ruShifted: 'Backspace',
    code: 'Backspace',
  },
  {
    eng: 'Tab',
    ru: 'Tab',
    engShifted: 'Tab',
    ruShifted: 'Tab',
    code: 'Tab',
  },
  {
    eng: 'q',
    ru: '',
    engShifted: 'Q',
    ruShifted: '',
    code: 'KeyQ',
  },
  {
    eng: 'w',
    ru: '',
    engShifted: 'W',
    ruShifted: '',
    code: 'KeyW',
  },
  {
    eng: 'e',
    ru: '',
    engShifted: 'E',
    ruShifted: '',
    code: 'KeyE',
  },
  {
    eng: 'r',
    ru: '',
    engShifted: 'R',
    ruShifted: '',
    code: 'KeyR',
  },
  {
    eng: 't',
    ru: '',
    engShifted: 'T',
    ruShifted: '',
    code: 'KeyT',
  },
  {
    eng: 'y',
    ru: '',
    engShifted: 'Y',
    ruShifted: '',
    code: 'KeyY',
  },
  {
    eng: 'u',
    ru: '',
    engShifted: 'U',
    ruShifted: '',
    code: 'KeyU',
  },
  {
    eng: 'i',
    ru: '',
    engShifted: 'I',
    ruShifted: '',
    code: 'KeyI',
  },
  {
    eng: 'o',
    ru: '',
    engShifted: 'O',
    ruShifted: '',
    code: 'KeyO',
  },
  {
    eng: 'p',
    ru: '',
    engShifted: 'P',
    ruShifted: '',
    code: 'KeyP',
  },
  {
    eng: '[',
    ru: '',
    engShifted: '{',
    ruShifted: '',
    code: 'BracketLeft',
  },
  {
    eng: ']',
    ru: '',
    engShifted: '}',
    ruShifted: '',
    code: 'BracketRight',
  },
  {
    eng: '\\',
    ru: '',
    engShifted: '|',
    ruShifted: '',
    code: 'Backslash',
  },
  {
    eng: 'CapsLock',
    ru: 'CapsLock',
    engShifted: 'CapsLock',
    ruShifted: 'CapsLock',
    code: 'CapsLock',
  },
  {
    eng: 'a',
    ru: '',
    engShifted: 'A',
    ruShifted: '',
    code: 'KeyA',
  },
  {
    eng: 's',
    ru: '',
    engShifted: 'S',
    ruShifted: '',
    code: 'KeyS',
  },
  {
    eng: 'd',
    ru: '',
    engShifted: 'D',
    ruShifted: '',
    code: 'KeyD',
  },
  {
    eng: 'f',
    ru: '',
    engShifted: 'F',
    ruShifted: '',
    code: 'KeyF',
  },
  {
    eng: 'g',
    ru: '',
    engShifted: 'G',
    ruShifted: '',
    code: 'KeyG',
  },
  {
    eng: 'h',
    ru: '',
    engShifted: 'H',
    ruShifted: '',
    code: 'KeyH',
  },
  {
    eng: 'j',
    ru: '',
    engShifted: 'J',
    ruShifted: '',
    code: 'KeyJ',
  },
  {
    eng: 'k',
    ru: '',
    engShifted: 'K',
    ruShifted: '',
    code: 'KeyK',
  },
  {
    eng: 'l',
    ru: '',
    engShifted: 'L',
    ruShifted: '',
    code: 'KeyL',
  },
  {
    eng: ';',
    ru: '',
    engShifted: ':',
    ruShifted: '',
    code: 'Semicolon',
  },
  {
    eng: '\'',
    ru: '',
    engShifted: '"',
    ruShifted: '',
    code: 'Quote',
  },
  {
    eng: 'Enter',
    ru: 'Enter',
    engShifted: 'Enter',
    ruShifted: 'Enter',
    code: 'Enter',
  },
  {
    eng: 'Shift',
    ru: 'Shift',
    engShifted: 'Shift',
    ruShifted: 'Shift',
    code: 'ShiftLeft',
  },
  {
    eng: 'z',
    ru: '',
    engShifted: 'Z',
    ruShifted: '',
    code: 'KeyZ',
  },
  {
    eng: 'x',
    ru: '',
    engShifted: 'X',
    ruShifted: '',
    code: 'KeyX',
  },
  {
    eng: 'c',
    ru: '',
    engShifted: 'C',
    ruShifted: '',
    code: 'KeyC',
  },
  {
    eng: 'v',
    ru: '',
    engShifted: 'V',
    ruShifted: '',
    code: 'KeyV',
  },
  {
    eng: 'b',
    ru: '',
    engShifted: 'B',
    ruShifted: '',
    code: 'KeyB',
  },
  {
    eng: 'n',
    ru: '',
    engShifted: 'N',
    ruShifted: '',
    code: 'KeyN',
  },
  {
    eng: 'm',
    ru: '',
    engShifted: 'M',
    ruShifted: '',
    code: 'KeyM',
  },
  {
    eng: ',',
    ru: '',
    engShifted: '<',
    ruShifted: '',
    code: 'Comma',
  },
  {
    eng: '.',
    ru: '',
    engShifted: '>',
    ruShifted: '',
    code: 'Period',
  },
  {
    eng: '/',
    ru: '',
    engShifted: '?',
    ruShifted: '',
    code: 'Slash',
  },
  {
    eng: '▲',
    ru: '▲',
    engShifted: '▲',
    ruShifted: '▲',
    code: 'ArrowUp',
  },
  {
    eng: 'Shift',
    ru: 'Shift',
    engShifted: 'Shift',
    ruShifted: 'Shift',
    code: 'ShiftRight',
  },
  {
    eng: 'Ctrl',
    ru: 'Ctrl',
    engShifted: 'Ctrl',
    ruShifted: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    eng: 'Win',
    ru: 'Win',
    engShifted: 'Win',
    ruShifted: 'Win',
    code: 'MetaLeft',
  },
  {
    eng: 'Alt',
    ru: 'Alt',
    engShifted: 'Alt',
    ruShifted: 'Alt',
    code: 'AltLeft',
  },
  {
    eng: '',
    ru: '',
    engShifted: '',
    ruShifted: '',
    code: 'Space',
  },
  {
    eng: 'Alt',
    ru: 'Alt',
    engShifted: 'Alt',
    ruShifted: 'Alt',
    code: 'AltRight',
  },
  {
    eng: '◄',
    ru: '◄',
    engShifted: '◄',
    ruShifted: '◄',
    code: 'ArrowLeft',
  },
  {
    eng: '▼',
    ru: '▼',
    engShifted: '▼',
    ruShifted: '▼',
    code: 'ArrowDown',
  },
  {
    eng: '►',
    ru: '►',
    engShifted: '►',
    ruShifted: '►',
    code: 'ArrowRight',
  },
  {
    eng: 'Ctrl',
    ru: 'Ctrl',
    engShifted: 'Ctrl',
    ruShifted: 'Ctrl',
    code: 'ControlRight',
  },
];

const appendKeys = () => {
  const appendLang = (lang, isHidden) => {
    const KEY = document.createElement('span');
    if (isHidden) {
      KEY.classList.add('hidden');
    }
    KEY.textContent = lang;
    return KEY;
  };

  KEYS_ARRAY.forEach((keyObj) => {
    const {
      eng, ru, engShifted, ruShifted, code,
    } = keyObj;
    const KEY_BUTTON = document.createElement('button');
    KEY_BUTTON.classList.add('keyboard__key');
    KEY_BUTTON.setAttribute('id', code);
    BOARD.append(KEY_BUTTON);
    const ENG = appendLang(eng, false);
    const ENG_SHIFTED = appendLang(ru, true);
    const RU = appendLang(engShifted, true);
    const RU_SHIFTED = appendLang(ruShifted, true);
    KEY_BUTTON.append(ENG);
    KEY_BUTTON.append(RU);
    KEY_BUTTON.append(ENG_SHIFTED);
    KEY_BUTTON.append(RU_SHIFTED);
  });
};

appendKeys();

document.addEventListener('keydown', (e) => {
  const BOARD_KEY = document.querySelector(`#${e.code}`);
  BOARD_KEY.classList.add('keyboard__key_active');
});

document.addEventListener('keyup', (e) => {
  const BOARD_KEY = document.querySelector(`#${e.code}`);
  BOARD_KEY.classList.remove('keyboard__key_active');
});
