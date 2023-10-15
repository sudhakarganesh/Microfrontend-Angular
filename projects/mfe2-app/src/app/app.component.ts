import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router , Route} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mfe2-app';
  textToDisplay="Successfully Registered !";
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Access-Control-Allow-Headers', '*').set('Access-Control-Allow-Origin', '*').set('Accept', 'application/json');

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    //this.invokeMessage() ;
  }

  // invokeMessage() {
  //     this.http.get('http://localhost:8080/test-rest-api' ,  { responseType: 'text', headers: this.headers })
  //     .subscribe(data => {
  //       console.log('### Sudhakar printing data : ' + data); 
  //       this.textToDisplay = data;     
  //     });
  // }
}
