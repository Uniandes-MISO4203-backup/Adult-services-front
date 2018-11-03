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
import { DoctorRegistrationComponent } from '../pages/registration/doctor-registration/doctor-registration.component';
import { ClinicalHistoryComponent } from '../pages/doctor/clinical-history/clinical-history.component';
import { AvailableDoctorsComponent } from '../pages/available-doctors/available-doctors.component';
import { UpcomingInterviewsComponent } from '../pages/doctor/upcoming-interviews/upcoming-interviews.component';
import { SolicitarServicioComponent } from '../pages/solicitar-servicio/solicitar-servicio.component';
import { MisServiciosComponent } from '../pages/mis-servicios/mis-servicios.component';


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
        ],
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
        path: 'solicitar-servicio/:id',
        component: RequestServiceComponent
    }, 
    {
        path: 'all-doctors',
        component: AvailableDoctorsComponent
    }, 
    {
        path: 'servicio/:id',
        component: SolicitarServicioComponent
    },
    {
        path: 'myservices',
        component: MisServiciosComponent
    }
]
;

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
