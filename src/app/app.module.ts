import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuardService } from './services/auth-guard.service';
import { AdultFormModule } from './adult-form/adult-form.module'

export function jokesProviderFactory(authGuardService: AuthGuardService) {
    return () => authGuardService.loadSession();
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AngularFontAwesomeModule,
        NgxPaginationModule,
        AdultFormModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuardService,
        {
            provide: APP_INITIALIZER, useFactory: jokesProviderFactory, deps: [AuthGuardService], multi: true
        }
    ]
})
export class AppModule { }
