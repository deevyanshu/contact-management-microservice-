import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:User=new User();
  contacts:Contact[]=[];

  constructor(private service:ContactService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    if(this.service.isUserLoggedIn())
    {
      this.getUser();
      //this.getContacts();
      
      
    }else
    {
      this.router.navigate(["/home"])
    }
    
  }

  getUser()
  {
    return this.service.getUser(this.service.getLoggedInUserName()).subscribe(data=>{
      this.user=data;
      this.getContacts();
    })
  }

  logout(){
    this.service.logout();
    this.router.navigate(["/home"])
  }

  add(){
    this.dialog.open(AddContactComponent,{
      width:"40%",
      data:this.user.id
    }).afterClosed().subscribe(data=>{
      this.getUser();
    })
  }

  getContacts(){
    this.service.getcontacts(this.user.id).subscribe(data=>{
      this.contacts=data;
    })
  }

}
