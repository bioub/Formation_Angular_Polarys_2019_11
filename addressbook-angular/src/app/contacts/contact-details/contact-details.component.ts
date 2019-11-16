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
    // ----------{contactId: '1'}--------{contactId: '7'}--------
    // map((paramMap) => paramMap.get('contactId'))
    // ----------1-----------------------7--------
    // ----------------------------------------{id: 7, name:'Kurtis'}---{id: 1, name:'Leanne'}
    // (contactId) => this.contactService.getById(contactId)
    // ----------------------------------------{id: 7, name:'Kurtis'}-------------------

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
