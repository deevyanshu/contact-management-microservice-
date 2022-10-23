import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User=new User();

  constructor(private service:ContactService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.service.register(this.user).subscribe(data=>{
      alert("registered")
    },error=>{alert("error")})
  }

}
