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
    ru: '-',
    engShifted: '_',
    ruShifted: '_',
    code: 'Minus',
  },
  {
    eng: '=',
    ru: '=',
    engShifted: '+',
    ruShifted: '+',
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
    ru: 'й',
    engShifted: 'Q',
    ruShifted: 'Й',
    code: 'KeyQ',
  },
  {
    eng: 'w',
    ru: 'ц',
    engShifted: 'W',
    ruShifted: 'Ц',
    code: 'KeyW',
  },
  {
    eng: 'e',
    ru: 'у',
    engShifted: 'E',
    ruShifted: 'У',
    code: 'KeyE',
  },
  {
    eng: 'r',
    ru: 'к',
    engShifted: 'R',
    ruShifted: 'К',
    code: 'KeyR',
  },
  {
    eng: 't',
    ru: 'е',
    engShifted: 'T',
    ruShifted: 'Е',
    code: 'KeyT',
  },
  {
    eng: 'y',
    ru: 'н',
    engShifted: 'Y',
    ruShifted: 'Н',
    code: 'KeyY',
  },
  {
    eng: 'u',
    ru: 'г',
    engShifted: 'U',
    ruShifted: 'Г',
    code: 'KeyU',
  },
  {
    eng: 'i',
    ru: 'ш',
    engShifted: 'I',
    ruShifted: 'Ш',
    code: 'KeyI',
  },
  {
    eng: 'o',
    ru: 'щ',
    engShifted: 'O',
    ruShifted: 'Щ',
    code: 'KeyO',
  },
  {
    eng: 'p',
    ru: 'з',
    engShifted: 'P',
    ruShifted: 'З',
    code: 'KeyP',
  },
  {
    eng: '[',
    ru: 'х',
    engShifted: '{',
    ruShifted: 'Х',
    code: 'BracketLeft',
  },
  {
    eng: ']',
    ru: 'ъ',
    engShifted: '}',
    ruShifted: 'Ъ',
    code: 'BracketRight',
  },
  {
    eng: '\\',
    ru: '\\',
    engShifted: '|',
    ruShifted: '/',
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
    ru: 'ф',
    engShifted: 'A',
    ruShifted: 'Ф',
    code: 'KeyA',
  },
  {
    eng: 's',
    ru: 'ы',
    engShifted: 'S',
    ruShifted: 'Ы',
    code: 'KeyS',
  },
  {
    eng: 'd',
    ru: 'в',
    engShifted: 'D',
    ruShifted: 'В',
    code: 'KeyD',
  },
  {
    eng: 'f',
    ru: 'а',
    engShifted: 'F',
    ruShifted: 'А',
    code: 'KeyF',
  },
  {
    eng: 'g',
    ru: 'п',
    engShifted: 'G',
    ruShifted: 'П',
    code: 'KeyG',
  },
  {
    eng: 'h',
    ru: 'р',
    engShifted: 'H',
    ruShifted: 'Р',
    code: 'KeyH',
  },
  {
    eng: 'j',
    ru: 'о',
    engShifted: 'J',
    ruShifted: 'О',
    code: 'KeyJ',
  },
  {
    eng: 'k',
    ru: 'л',
    engShifted: 'K',
    ruShifted: 'Л',
    code: 'KeyK',
  },
  {
    eng: 'l',
    ru: 'д',
    engShifted: 'L',
    ruShifted: 'Д',
    code: 'KeyL',
  },
  {
    eng: ';',
    ru: 'ж',
    engShifted: ':',
    ruShifted: 'Ж',
    code: 'Semicolon',
  },
  {
    eng: '\'',
    ru: 'э',
    engShifted: '"',
    ruShifted: 'Э',
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
    ru: 'я',
    engShifted: 'Z',
    ruShifted: 'Я',
    code: 'KeyZ',
  },
  {
    eng: 'x',
    ru: 'ч',
    engShifted: 'X',
    ruShifted: 'Ч',
    code: 'KeyX',
  },
  {
    eng: 'c',
    ru: 'с',
    engShifted: 'C',
    ruShifted: 'С',
    code: 'KeyC',
  },
  {
    eng: 'v',
    ru: 'м',
    engShifted: 'V',
    ruShifted: 'М',
    code: 'KeyV',
  },
  {
    eng: 'b',
    ru: 'и',
    engShifted: 'B',
    ruShifted: 'И',
    code: 'KeyB',
  },
  {
    eng: 'n',
    ru: 'т',
    engShifted: 'N',
    ruShifted: 'Т',
    code: 'KeyN',
  },
  {
    eng: 'm',
    ru: 'ь',
    engShifted: 'M',
    ruShifted: 'Ь',
    code: 'KeyM',
  },
  {
    eng: ',',
    ru: 'б',
    engShifted: '<',
    ruShifted: 'Б',
    code: 'Comma',
  },
  {
    eng: '.',
    ru: 'ю',
    engShifted: '>',
    ruShifted: 'Ю',
    code: 'Period',
  },
  {
    eng: '/',
    ru: '.',
    engShifted: '?',
    ruShifted: ',',
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
    eng: 'Whitespace',
    ru: 'Whitespace',
    engShifted: 'Whitespace',
    ruShifted: 'Whitespace',
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

const BOARD_STATE = {
  lang: 'eng',
  isShifted: false,
};

const appendKeys = () => {
  const appendLang = (type, name, isHidden) => {
    const KEY = document.createElement('span');
    if (isHidden) {
      KEY.classList.add('hidden');
    }
    KEY.classList.add(`keyboard__${name}`);
    KEY.classList.add('keyboard__key');
    KEY.textContent = type;
    return KEY;
  };

  KEYS_ARRAY.forEach((keyObj) => {
    const {
      eng, ru, engShifted, ruShifted, code,
    } = keyObj;
    const KEY_BUTTON = document.createElement('button');
    KEY_BUTTON.classList.add('keyboard__button');

    if (code === 'Backspace' || code === 'CapsLock' || code === 'Enter' || code === 'ShiftLeft' || code === 'ShiftRight') {
      KEY_BUTTON.classList.add('keyboard__button_big');
    }

    if (code === 'ControlLeft' || code === 'MetaLeft' || code === 'AltLeft' || code === 'AltRight' || code === 'ControlRight') {
      KEY_BUTTON.classList.add('keyboard__button_middle');
    }

    if (code === 'Space') {
      KEY_BUTTON.classList.add('keyboard__button_space');
    }

    KEY_BUTTON.setAttribute('id', code);
    BOARD.append(KEY_BUTTON);

    let engSpan;
    let ruSpan;
    const engShiftedSpan = appendLang(engShifted, 'engShifted', true);
    const ruShiftedSpan = appendLang(ruShifted, 'ruShifted', true);

    if (BOARD_STATE.lang === 'eng') {
      engSpan = appendLang(eng, 'eng', false);
      ruSpan = appendLang(ru, 'ru', true);
    } else {
      engSpan = appendLang(eng, 'eng', true);
      ruSpan = appendLang(ru, 'ru', false);
    }
    KEY_BUTTON.append(engSpan);
    KEY_BUTTON.append(ruSpan);
    KEY_BUTTON.append(engShiftedSpan);
    KEY_BUTTON.append(ruShiftedSpan);
  });
};

appendKeys();

const addTextareaValue = (value) => {
  TEXTAREA.focus();
  TEXTAREA.value += value;
};

document.addEventListener('keydown', (e) => {
  const { code } = e;
  TEXTAREA.focus();
  const BOARD_KEY = document.querySelector(`#${code}`);
  BOARD_KEY.classList.add('keyboard__button_active');

  if (code === 'ArrowUp') {
    e.preventDefault();
    addTextareaValue('▲');
  }
  if (code === 'ArrowDown') {
    e.preventDefault();
    addTextareaValue('▼');
  }
  if (code === 'ArrowRight') {
    e.preventDefault();
    addTextareaValue('►');
  }
  if (code === 'ArrowLeft') {
    e.preventDefault();
    addTextareaValue('◄');
  }
});

document.addEventListener('keyup', (e) => {
  const BOARD_KEY = document.querySelector(`#${e.code}`);
  BOARD_KEY.classList.remove('keyboard__button_active');
});

BOARD.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('keyboard__key')) {
    addTextareaValue(target.textContent);
  }
});
