import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
// module for th adult form
import {AdultFormModule} from './adult-form/adult-form.module'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AuthorModule,
        BookModule,
        EditorialModule,
        FormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        SharedModule,
        AngularFontAwesomeModule,
        NgxPaginationModule,
        AdultFormModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
