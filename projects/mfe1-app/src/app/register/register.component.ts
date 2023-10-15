import { Component } from '@angular/core';
import { Router , Route} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { SharedService } from 'shared-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    firstname: '',
    lastname: '',
    email: '',
  };
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Access-Control-Allow-Headers', '*').set('Access-Control-Allow-Origin', '*').set('Accept', 'application/json');
  
  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {

    this.http.get('http://localhost:8080/test-rest-api' ,  { responseType: 'text', headers: this.headers })
    .subscribe(data => {

      console.log('### Sudhakar printing data : ' + data);   
      if (data === 'success') {
        //this.router.navigate(['/success']);
        window.location.replace('http://localhost:4400/success');
        }
    });

    console.log(this.user);
  }
}
