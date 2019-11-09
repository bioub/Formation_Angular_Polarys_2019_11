import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactsModule } from './contacts/contacts.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ContactsModule,
    AppRoutingModule, // en dernier pour NotFound
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
