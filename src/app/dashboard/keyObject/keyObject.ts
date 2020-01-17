const KeyCode = [
  [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8],
  [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
  [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
  [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16],
  [17, 91, 18, 32, 18, 93, 17]
];

const KeyName = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'del'],
  ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'enter'],
  ['lshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'rshift'],
  ['lctrl', 'win', 'lalt', 'space', 'ralt', 'menu', 'rctrl']
];

const KeyColor = [
  ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'o'],
  ['b', 'w', 'o', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b'],
  ['b', 'o', 'o', 'o', 'b', 'w', 'w', 'b', 'w', 'w', 'w', 'w', 'o'],
  ['b', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'b'],
  ['b', 'b', 'b', 'o', 'b', 'b', 'b']
];

const KeySize = [
  ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2'],
  ['105', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '105'],
  ['1075', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2'],
  ['2', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '3'],
  ['105', '105', '105', '6', '105', '105', '105']
];


class Key {
  color: string = 'white';
  name: string = '';
  keyCode: number = 0;
  size: string = '1';
  constructor(name: string, color: string, code: number, size: string) {
    this.color = color;
    this.name = name;
    this.keyCode = code;
    this.size = size;
  }
}


export class KeyBoard {
  private _keys: Array<Array<Key>> = new Array<Array<Key>>();
  constructor() {
    KeyCode.forEach((rl, i) => {
      this._keys[i] = new Array<Key>();
      KeyCode[i].forEach((el, j) => {
        this._keys[i].push(new Key(KeyName[i][j], KeyColor[i][j], KeyCode[i][j], KeySize[i][j]));
      });
    });
  }

  get keys() {
    return this._keys;
  }
}
