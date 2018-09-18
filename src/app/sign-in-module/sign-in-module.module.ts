import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignInComponentComponent],
  bootstrap: [SignInComponentComponent]
})
export class SignInModuleModule { }
