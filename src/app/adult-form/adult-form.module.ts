import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultFormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AdultFormComponent],
  bootstrap: [AdultFormComponent]
})
export class AdultFormModule { }
