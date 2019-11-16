import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../shared/contact.model';
import { timer } from 'rxjs';
import { map, delayWhen, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('contactId')),
        switchMap((contactId) => this.contactService.getById(contactId))
      )
      .subscribe((contact) => {
        this.contact = contact;
      });

  }


}
