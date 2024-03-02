import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){ }
  msgError:string= ''
  
  isLoanding:boolean = false
  
  loginsubscrib:Subscription = new Subscription
  
  ResetForm:FormGroup = new FormGroup({
    email: new FormControl( null ,[Validators.required , Validators.email]),
    newPassword: new FormControl( null ,[Validators.required ,   Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    
  })
  
  handleResetForm():void{
    
  if(this.ResetForm.valid){
    this.isLoanding = true
    console.log(this.ResetForm.value);
    this.loginsubscrib = this._AuthService.ResetPassword(this.ResetForm.value).subscribe({
      next:(response) => {
        // console.log(response);
      
        this.isLoanding = false
    this._Router.navigate(['/login'])
      
        
      },
   
      error:(err:HttpErrorResponse)=>{
          console.log(err);
          if(err.message == "error")
          this.isLoanding = false
          this.msgError = err.error.message
    
        }
    })
    
  }
  }
  
  ngOnDestroy(): void {
    this.loginsubscrib.unsubscribe()
  }
}
