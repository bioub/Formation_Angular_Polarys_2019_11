import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactService } from './shared/contact.service';

@NgModule({
  declarations: [ContactsListComponent, ContactsComponent, ContactAddComponent, ContactDetailsComponent],
  // providers: [
    // {
    //   provide: ContactService,
    //   useClass: ContactService,
    // }
    // ContactService
  // ],
  imports: [
    SharedModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
