import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){ }
  msgError:string= ''
  
  isLoading:boolean = false
  
  regisrerSubscrip:Subscription = new Subscription
  registerForm : FormGroup = new FormGroup ({
    name: new FormControl( null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    email: new FormControl( null ,[Validators.required , Validators.email]),
    password: new FormControl( null ,[Validators.required ,   Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)]),
    rePassword: new FormControl( null ),
    phone: new FormControl( null ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  },{validators:[this.confirmPassword]} as FormControlOptions)
  
  confirmPassword(group : FormGroup) :void {
    const password = group.get('password')
    const rePassword = group.get('rePassword')
    if(rePassword?.value === ''){
      rePassword.setErrors({required:true})
    }
    else if(password?.value !== rePassword?.value){
    rePassword?.setErrors({notmatch:true})
    }
  }
  
  handleForm():void{
    
  if(this.registerForm.valid){
    this.isLoading = true
    console.log(this.registerForm.value);
    this.regisrerSubscrip = this._AuthService.setRegister(this.registerForm.value).subscribe({
      next:(response) => {
        // console.log(response);
      if(response.message == "success"){
        this.isLoading = false
    this._Router.navigate(['/login'])
      }
        
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        if(err.message == "error")
        this.isLoading = false
        this.msgError = err.error.message
  
      }
    })
    
  }
  else{
    this.registerForm.markAllAsTouched()
  }
  }
  
  ngOnDestroy(): void {
    this.regisrerSubscrip.unsubscribe()
  }
}
