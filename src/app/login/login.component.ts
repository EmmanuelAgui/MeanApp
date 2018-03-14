import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogin: boolean = false;

  username="";
  password="";

  constructor(@Inject('auth') private authService) { }

  ngOnInit() {
  }
  
  onSubmit(formValue){
    console.log('auth result is: '
    +this.authService.loginWithCredentials(formValue.login.username,formValue.login.password));
  }


}
