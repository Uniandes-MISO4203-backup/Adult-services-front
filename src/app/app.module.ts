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
import { NurseRegistrationComponent } from './pages/nurse-registration/nurse-registration.component';
import { ClientValidationComponent } from './pages/client-validation/client-validation.component';
import { TableComponent } from './pages/client-validation/table/table.component';
import { TableRowComponent } from './pages/client-validation/table-row/table-row.component';
import { DoctorRegistrationComponent } from './pages/doctor-registration/doctor-registration.component';
import { RegisterService } from './services/register-service.service';
import { InterviewInformationsComponent } from './pages/interview-informations/interview-informations.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './pages/ui-elements/header/header.component';
import { RequestServiceComponent } from './pages/request-service/request-service.component';
import { AdultRegistrationComponent } from './pages/adult-registration/adult-registration.component';
import { GetInfoService  } from './services/getInfo-services.service';

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
        TableComponent,
        TableRowComponent,
        DoctorRegistrationComponent,        
        InterviewInformationsComponent,
        LandingPageComponent,
        HeaderComponent,
        RequestServiceComponent,
        AdultRegistrationComponent,
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
