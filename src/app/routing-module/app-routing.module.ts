import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// adult registering component
import { AdultFormComponent } from '../adult-form/form/form.component'

//sign in component
import { SignInComponentComponent } from '../sign-in-module/sign-in-component/sign-in-component.component'
import { NurseRegistrationComponent } from '../pages/nurse-registration/nurse-registration.component';
import { HomeComponent } from '../pages/home/home.component';
import { ClientValidationComponent } from '../pages/client-validation/client-validation.component';
import { DoctorRegistrationComponent } from '../pages/doctor-registration/doctor-registration.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
    {
        path: 'register',
        children: [
            {
                path: 'adult',
                component: AdultFormComponent
            },
            {
                path: 'nurse',
                component: NurseRegistrationComponent
            },
            {
                path: 'doctor',
                component: DoctorRegistrationComponent
            },
        ]
    },
    {
        path: 'signIn',
        component: SignInComponentComponent
    },
    {
        path: 'solicitudes',
        component: ClientValidationComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
