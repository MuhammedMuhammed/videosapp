import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GlobalVars } from '../globalv-Components';


@Injectable({
  providedIn: 'root'
})
export class MoviesservicesService {

  constructor(private httpClient: HttpClient) { }
  getMovies(Page: Number) {

    return this.httpClient.get<any>(`${GlobalVars.moviesApi}&page=${Page}`);
  }



  getOpenVideo(id: Number) {
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${GlobalVars.apikey}&append_to_response=videos`);
  }
}
