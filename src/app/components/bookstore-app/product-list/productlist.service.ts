import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url:string = 'https://localhost:44382/bookstore';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBook(){
    return this.http.get(this.url);
  }
}
