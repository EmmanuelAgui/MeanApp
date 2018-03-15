import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  messages = [
    `You're now friends with John`,
    `John liked your tweet`,
    `You'll .....`
  ]

  constructor() { }

  loginWithCredentials(username:string,password:string):boolean{
    if(username ==='linlin'&&password==='Emmanuel')
       return true;
    return false;
  }

}
