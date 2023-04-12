import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpClient } from '@angular/common/http';
import { MovieResponseModel } from 'src/app/models/movieResponseModel';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  apiUrl = 'https://localhost:44358/api/movies/getAll';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.httpClient
      .get<MovieResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.movies = response.data
      });
  }
}
