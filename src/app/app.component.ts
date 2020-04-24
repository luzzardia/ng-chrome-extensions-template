import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-roll20-rolls',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'roll20rolls';
  elements: Array<number> = new Array(50);

  constructor() {
    console.log('constructor');
  }

  public ngOnInit(): void {
    console.log('init app');
  }
}
