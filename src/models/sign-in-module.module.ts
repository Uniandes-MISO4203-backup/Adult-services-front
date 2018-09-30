import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponentComponent } from '../app/pages/sign-in-module/sign-in-component/sign-in-component.component';
import { SignInServiceService } from '../app/services/sign-in-service.service';
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
