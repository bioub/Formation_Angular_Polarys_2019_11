import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';

import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ClockComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    CommonModule, // exporte tous les exports de ce module
    FormsModule,
  ]
})
export class SharedModule { }
