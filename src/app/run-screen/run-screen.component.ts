import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-screen',
  templateUrl: './run-screen.component.html',
  styleUrls: ['./run-screen.component.css']
})
export class RunScreenComponent implements OnInit {
  d = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.d = new Date();
   }, 1000);
  }

}
