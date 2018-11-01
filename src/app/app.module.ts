import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuardService } from './services/auth-guard.service';
import { SignInModuleModule } from '../models/sign-in-module.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/ui-elements/footer/footer.component';
import { NurseRegistrationComponent } from './pages/registration/nurse-registration/nurse-registration.component';
import { ClientValidationComponent } from './pages/doctor/client-validation/client-validation.component';
import { DoctorRegistrationComponent } from './pages/registration/doctor-registration/doctor-registration.component';
import { RegisterService } from './services/register-service.service';
import { InterviewInformationsComponent } from './pages/home/interview-informations/interview-informations.component';
import { LandingPageComponent } from './pages/home/landing-page/landing-page.component';
import { HeaderComponent } from './pages/ui-elements/header/header.component';
import { RequestServiceComponent } from './pages/client/request-service/request-service.component';
import { AdultRegistrationComponent } from './pages/registration/adult-registration/adult-registration.component';
import { GetInfoService  } from './services/getInfo-services.service';
import { BannerComponent } from './pages/ui-elements/banner/banner.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ClinicalHistoryComponent } from './pages/doctor/clinical-history/clinical-history.component';
import { AvailableDoctorsComponent } from './pages/available-doctors/available-doctors.component';
import { UpcomingInterviewsComponent } from './pages/doctor/upcoming-interviews/upcoming-interviews.component';
import { SolicitarServicioComponent } from './pages/solicitar-servicio/solicitar-servicio.component';
import { MisServiciosComponent } from './pages/mis-servicios/mis-servicios.component';

export function jokesProviderFactory(authGuardService: AuthGuardService) {
    return () => authGuardService.loadSession();
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        NurseRegistrationComponent,
        ClientValidationComponent,
        DoctorRegistrationComponent,        
        InterviewInformationsComponent,
        LandingPageComponent,
        HeaderComponent,
        AdultRegistrationComponent,
        BannerComponent,
        SignInComponent,
        ClinicalHistoryComponent,
        RequestServiceComponent,
        AvailableDoctorsComponent,
        UpcomingInterviewsComponent,
        SolicitarServicioComponent,
        MisServiciosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AngularFontAwesomeModule,
        NgxPaginationModule,
        SignInModuleModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuardService,
        {
            provide: APP_INITIALIZER, useFactory: jokesProviderFactory, deps: [AuthGuardService], multi: true
        },
        RegisterService,
        GetInfoService 
    ]
})
export class AppModule { }
