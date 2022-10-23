import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openLogin(){
    this.dialog.open(LoginComponent,{
      width:"40%"
    })

  }

  openRegister()
  {
    this.dialog.open(RegisterComponent,{
      width:"40%"
    })
  }

}
