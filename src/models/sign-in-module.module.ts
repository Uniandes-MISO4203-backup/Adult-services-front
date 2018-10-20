import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../app/pages/sign-in/sign-in.component';
import { SignInServiceService } from '../app/services/sign-in-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignInServiceService],
  declarations: [],
  bootstrap: []
})
export class SignInModuleModule { }
