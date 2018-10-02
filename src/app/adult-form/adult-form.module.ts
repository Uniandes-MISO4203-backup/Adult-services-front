import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdultFormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
 
  declarations: [AdultFormComponent],
  bootstrap: [AdultFormComponent]
})
export class AdultFormModule { }
