import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Filters} from '../models/filters';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  API_KEY = 'b5dd158dd0e856443db7fb726fbc6bc9';
  HASH = '80182fcb24c6426319114b9e34eafed6';
  API_URL = 'http://gateway.marvel.com/v1/public/comics?';

  constructor(private http: HttpClient) { }

  getComics(filters = new Filters()): Observable<any> {
    const url = this.API_URL +
      'apikey='  + this.API_KEY +
      '&hash='  + this.HASH +
      (filters.offset  ? '&offset='  + filters.offset  : '') +
      (filters.title   ? '&title='   + filters.title   : '') +
      (filters.orderBy ? '&orderBy=' + filters.orderBy : '') +
      (filters.limit   ? '&limit='   + filters.limit   : '') +
      (filters.ts      ? '&ts='      + filters.ts      : '') ;
    return this.http.get<any>(url);
  }

}
