import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl = 'https://localhost:44358/api/genres/getAll';
  constructor(private httpClient: HttpClient) { }

  getGenres():Observable<ListResponseModel<Genre>> {
    return this.httpClient
      .get<ListResponseModel<Genre>>(this.apiUrl);
  }
}
