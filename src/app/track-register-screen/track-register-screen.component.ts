import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-register-screen',
  templateUrl: './track-register-screen.component.html',
  styleUrls: ['./track-register-screen.component.css']
})
export class TrackRegisterScreenComponent implements OnInit {
  valid: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  validFunc() {
    if(this.valid==false){this.valid = true;}
    else{
      this.valid = false;
    } 
  }
}
