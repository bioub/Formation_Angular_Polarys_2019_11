import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  // private title: Title;

  // constructor(title: Title) {
  //   this.title = title;
  //  }

  // constructor(private title: Title) {
  // }
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    //this.title.setTitle('Ajouter un contact');
  }

}
