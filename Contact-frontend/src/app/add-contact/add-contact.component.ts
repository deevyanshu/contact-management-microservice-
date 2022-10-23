import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact:Contact=new Contact();

  constructor(private service:ContactService,@Inject(MAT_DIALOG_DATA)private uid:number,private dialogref:MatDialogRef<AddContactComponent>) { }

  ngOnInit(): void {
  }

  addContact(){
    this.service.addContact(this.contact,this.uid).subscribe(data=>{
      alert("contact added")
      this.dialogref.close();
      console.log(this.contact);
    },error=>{alert("error")})
  }

}
