import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts;

  constructor(private contactService: ContactService) {


  }

  ngOnInit() {
    this.contactService.getAll().subscribe((results) => {
      this.contacts = results;
    })
  }

}
