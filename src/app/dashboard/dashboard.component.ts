import { Component, HostListener, AfterViewInit } from '@angular/core';

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
  public text = '';

  constructor() { }

  ngAfterViewInit() {
    this.kd = document.querySelectorAll('.key');
  }


  @HostListener('window:keydown', ['$event'])
  keyUpEvent(event: KeyboardEvent) {
    console.log(`Click on: ${event.key}`);

    let i = 0;
    if (event.keyCode === 16) {
      if (event.location === 1) { i = 41; } else { i = 52; }
    } else if (event.keyCode === 17) {
      if (event.location === 1) { i = 53; } else { i = 59; }
    } else if (event.keyCode === 18) {
      if (event.location === 1) { i = 55; } else { i = 57; }
    } else {
      i = KEY_CODE_NUM.indexOf(event.keyCode);
    }
    this.kd[i].classList.add('key--down');
  }

  @HostListener('window:keyup', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    console.log(`Click on: ${event.key}`);
    this.text += event.key;

    let i = 0;
    if (event.keyCode === 16) {
      if (event.location === 1) { i = 41; } else { i = 52; }
    } else if (event.keyCode === 17) {
      if (event.location === 1) { i = 53; } else { i = 59; }
    } else if (event.keyCode === 18) {
      if (event.location === 1) { i = 55; } else { i = 57; }
    } else {
      i = KEY_CODE_NUM.indexOf(event.keyCode);
    }
    this.kd[i].classList.remove('key--down');
  }
}
