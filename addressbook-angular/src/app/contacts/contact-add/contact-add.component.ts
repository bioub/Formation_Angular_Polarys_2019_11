import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contact = new Contact();
  // private title: Title;

  // constructor(title: Title) {
  //   this.title = title;
  //  }

  // constructor(private title: Title) {
  // }
  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    //this.title.setTitle('Ajouter un contact');
  }


  onSubmit() {
    this.contactService.create(this.contact).subscribe((contact) => {
      this.contactService.add.emit(contact);
      this.router.navigate(['contacts']);
    });
  }

}
