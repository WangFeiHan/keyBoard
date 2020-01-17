import { Component, HostListener, AfterViewInit } from '@angular/core';
import { KeyBoard } from './keyObject/keyObject';

const KEY_CODE_NUM = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16,
  17, 91, 18, 32, 18, 93, 17
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  private kd;
  public keyBoard = new KeyBoard(); // for template
  public text = '';
  constructor() { }

  ngAfterViewInit() {
    this.kd = document.querySelectorAll('.key');
  }

  searchKeyIndex(event: { keyCode: number, location: number }) {
    switch (event.keyCode) {
      case 16:
        return event.location === 1 ? 41 : 52;
      case 17:
        return event.location === 1 ? 53 : 59;
      case 18:
        return event.location === 1 ? 55 : 57;
      default:
        return KEY_CODE_NUM.indexOf(event.keyCode);
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    console.log(`Click on: ${event.key}`);
    let i = this.searchKeyIndex(event);

    if (i !== -1) {
      this.kd[i].classList.add('key--down');
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    console.log(`Click on: ${event.key}`);
    if (event.keyCode === 8) { // Backspace
      this.text = this.text.substring(0, this.text.length - 1);
    } else if (event.keyCode === 8 || event.keyCode === 9
      || event.keyCode === 20 || event.keyCode === 16
      || event.keyCode === 17 || event.keyCode === 18
      || event.keyCode === 91 || event.keyCode === 93) {
      // Do nothing.
    } else if (event.keyCode === 13) { // Enter
      this.text += '\n';
    } else { this.text += event.key; }

    let i = this.searchKeyIndex(event);
    if (i !== -1) {
      this.kd[i].classList.remove('key--down');
    }
  }
}
