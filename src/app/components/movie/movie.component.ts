import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieResponseModel } from 'src/app/models/movieResponseModel';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  dataLoaded =false;
  
  constructor(private movieService:MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
  this.movieService.getMovies().subscribe(response=>{
    this.movies = response.data
    this.dataLoaded = true;
})
  }
}
