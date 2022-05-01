import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVars } from '../globalv-Components';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class TopRatedService {
  toprated: Movies[] = [];

  constructor(private httpClient: HttpClient) { }
  getMovies() {
    return this.httpClient.get<any>(GlobalVars.topRatedMoviesApi).subscribe(res => {
      this.toprated = res["results"];
    });
  }
}
