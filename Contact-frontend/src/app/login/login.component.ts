import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor(private service:ContactService,private router:Router,private dialogref:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  handleLogin()
  {
    return this.service.authenticationService(this.username,this.password).subscribe((data)=>{
      alert("login")
      this.dialogref.close();
      this.router.navigate(["/dashboard"]);
    },error=>[alert("error"),console.log(this.username,this.password)])
  }

}
