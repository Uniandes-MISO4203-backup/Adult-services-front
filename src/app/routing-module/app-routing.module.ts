import { SignInComponent } from './../pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// adult registering component
import { AdultRegistrationComponent } from '../pages/registration/adult-registration/adult-registration.component';


//sign in component
import { NurseRegistrationComponent } from '../pages/registration/nurse-registration/nurse-registration.component';
import { HomeComponent } from '../pages/home/home.component';
<<<<<<< HEAD
import { ClientValidationComponent } from '../pages/doctor/client-validation/client-validation.component';
import { DoctorRegistrationComponent } from '../pages/registration/doctor-registration/doctor-registration.component';
import { DoctorInterviewsComponent } from '../pages/doctor/doctor-interviews/doctor-interviews.component';
=======
import { ClientValidationComponent } from '../pages/client-validation/client-validation.component';
import { DoctorRegistrationComponent } from '../pages/doctor-registration/doctor-registration.component';
import { ClinicalHistoryComponent } from '../pages/clinical-history/clinical-history.component';
>>>>>>> origin/ciclo2_iteracion2_semana2

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
                component: AdultRegistrationComponent
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
        component: SignInComponent
    },
    {
        path: 'citas',
        component: DoctorInterviewsComponent//ClientValidationComponent
    },
    {
        path: 'clinicalHistory',
        component: ClinicalHistoryComponent
    }
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
