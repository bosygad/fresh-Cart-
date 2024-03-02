import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){ }
  msgError:string= ''
  
  isLoanding:boolean = false
  
  loginsubscrib:Subscription = new Subscription
  
  LoginForm:FormGroup = new FormGroup({
    email: new FormControl( null ,[Validators.required , Validators.email]),
    password: new FormControl( null ,[Validators.required ,   Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    
  })
  
  handleLoginForm():void{
    
  if(this.LoginForm.valid){
    this.isLoanding = true
    console.log(this.LoginForm.value);
    this.loginsubscrib = this._AuthService.setLogin(this.LoginForm.value).subscribe({
      next:(response) => {
        // console.log(response);
      if(response.message == "success"){
       localStorage.setItem('eToken',response.token)
       this._AuthService.saveUserData(); 
       this.isLoanding = false;
    this._Router.navigate(['/home']);
      }
        
      },
   
      error:(err:HttpErrorResponse)=>{
          console.log(err);
          if(err.message == "error")
          this.isLoanding = false
          this.msgError = err.error.message
    
        }
    })
    
  }
  else{
    this.LoginForm.markAllAsTouched()
  }
  }
  
  ngOnDestroy(): void {
    this.loginsubscrib.unsubscribe()
  }
}
