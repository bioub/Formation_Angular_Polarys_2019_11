import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


const routes: Routes = [{
  path: 'contacts',
  component: ContactsComponent,
  children: [{
    path: 'add', // url complète /contacts/add
    component: ContactAddComponent,
  }, {
    path: ':contactId',
    component: ContactDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
