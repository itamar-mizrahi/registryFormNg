import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }
  onCreatePost(postData: {title:string; content:string}){
this.http.post('https://registry-stand.firebaseio.com/posts.json',postData).subscribe(responseData=>{
  console.log(responseData);
});

  }
  onFetchPosts(){

  }
}