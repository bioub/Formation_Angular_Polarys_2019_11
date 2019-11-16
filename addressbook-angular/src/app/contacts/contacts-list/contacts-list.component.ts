import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {


  }

  ngOnInit() {
    this.contactService.getAll().subscribe((results) => {
      this.contacts = results;
    })

    this.contactService.add.subscribe((contact) => {
      this.contacts.push(contact);
    })
  }

}
