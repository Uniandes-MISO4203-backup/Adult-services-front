import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { BookService } from '../book.service';
import { Book } from '../book';
import { Editorial } from '../../editorial/editorial';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The book's id retrieved from the address
    */
    book_id: number;

    /**
    * The book whose details are shown
    */
    book: Book;

    /**
    * The other books shown in the sidebar
    */
    other_books: Book[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getBook(): void {
        this.bookService.getBook(this.book_id)
            .subscribe(book => {
                this.book = book;
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getAllBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.other_books = books;
                this.other_books = this.other_books.filter(book => book.id !== this.book_id);
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.book_id = +this.route.snapshot.paramMap.get('id');
        this.book = new Book();
        this.book.editorial = new Editorial();
        this.other_books = [];
        this.getBook();
        this.getAllBooks();
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
