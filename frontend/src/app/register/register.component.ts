import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BnbService } from '../service/bnb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  



  constructor(private  http:HttpClient, private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(data:any){

    
    //Add the User to the Database
    this.http.post('http://localhost:3000/register',data, {responseType:'text'})
    .subscribe((results)=>{

      if(results == 'ddd'){

        this.router.navigate(['login'])
        alert(results)
        
        console.warn(results)
       }
       else{
        alert(results)
        console.warn(results)
       }

      })
    }
  }




