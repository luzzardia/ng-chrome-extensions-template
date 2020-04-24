import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrome-extension-template',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-chrome-extension-template';
  elements: Array<number> = new Array(50);

  constructor() {
    console.log('constructor');
  }

  public ngOnInit(): void {
    console.log('init app');
  }
}
