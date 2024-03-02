import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  msgSuccess:any;
  msgCodeSuccess:any;
constructor(private _AuthService:AuthService , private _Router:Router){}

forgetPassword = new FormGroup ({
  email : new FormControl
})

sendCode(form:FormGroup):void{
console.log(form);
this._AuthService.ForgetPassword(form.value).subscribe({
  next:(response)=>{

    console.log(response);
    this.msgSuccess = response.message
    document.querySelector('.forgetPassword')?.classList.add('d-none')
    document.querySelector('.verfiyCode')?.classList.remove('d-none')
    
  },
  error:(err)=>{
    console.log(err);
    
  }
})

}

verfiyCode = new FormGroup ({
  resetCode : new FormControl(),
})

verfiyResetCode(form:FormGroup){
this._AuthService.verifyCode(form.value).subscribe({
  next:(response)=>{
    console.log(response);
    this.msgCodeSuccess = response.status
    if(response.status == 'Success')
{this._Router.navigate(['/resetPassword'])}
    
    
  },
  error:(err)=>{
console.log(err);

  }

})
}
}
