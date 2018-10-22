import { RequestServiceComponent } from './../pages/client/request-service/request-service.component';
import { SignInComponent } from './../pages/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// adult registering component
import { AdultRegistrationComponent } from '../pages/registration/adult-registration/adult-registration.component';


//sign in component
import { NurseRegistrationComponent } from '../pages/registration/nurse-registration/nurse-registration.component';
import { HomeComponent } from '../pages/home/home.component';
import { ClientValidationComponent } from '../pages/doctor/client-validation/client-validation.component';
import { DoctorRegistrationComponent } from '../pages/registration/doctor-registration/doctor-registration.component';
import { ClinicalHistoryComponent } from '../pages/doctor/clinical-history/clinical-history.component';
import { AvailableDoctorsComponent } from '../pages/available-doctors/available-doctors.component';
import { UpcomingInterviewsComponent } from '../pages/doctor/upcoming-interviews/upcoming-interviews.component';


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
        component: UpcomingInterviewsComponent//ClientValidationComponent
    },
    {
        path: 'clinicalHistory/:id',
        component: ClinicalHistoryComponent
    },
    {
        path: 'solicitar-servicio',
        component: RequestServiceComponent
    }, 
    {
        path: 'all-doctors',
        component: AvailableDoctorsComponent
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
