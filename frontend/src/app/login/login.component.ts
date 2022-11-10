import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BnbService } from '../service/bnb.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {}
  userForm: any;
  

  constructor(private http:HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {


  
  }
 
  
  onSubmit(data:any){
   //check
    //connect to server
    this.http.post('http://localhost:3000/login',data, {responseType:'text'})
    .subscribe((results)=>{
 
      
 
      if(results == 'success'){
       alert('succesfully loged in')
       console.warn(results)
       localStorage.setItem("token",results);
       
       
      }
      else{
       alert('invalid login details')
       console.warn(results)
      }
      
    })
   

   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value))


 
  }

}