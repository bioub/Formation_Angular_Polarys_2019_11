import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactsModule } from './contacts/contacts.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule, // importe aussi Forms et CommonModule qui sont exportés par Shared
    BrowserModule, // BrowserModule contient le service Title, il faut donc l'importer qu'une seule fois dans AppModule
    ContactsModule,
    AppRoutingModule, // en dernier pour NotFound
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
