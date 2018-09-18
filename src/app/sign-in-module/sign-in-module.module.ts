import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { SignInServiceService } from './sign-in-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [SignInServiceService],
  declarations: [SignInComponentComponent],
  bootstrap: [SignInComponentComponent]
})
export class SignInModuleModule { }
