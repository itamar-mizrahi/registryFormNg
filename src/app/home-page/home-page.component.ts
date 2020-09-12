import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  d = new Date();
  valid: boolean = false;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.d = new Date();
   }, 1000);
  }
  validFunc() {
    if(this.valid==false){this.valid = true;}
    else{
      this.valid = false;
    } 
  }
}
