import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookReviewListComponent } from './book-review-list/book-review-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        SharedModule,
        NgxPaginationModule
    ],
    declarations: [
        BookListComponent, BookDetailComponent, BookReviewListComponent
    ],
    providers: [BookService],
    bootstrap: [BookListComponent]
})
export class BookModule { }
