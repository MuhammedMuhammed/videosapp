import { Component, OnInit } from '@angular/core';
import { MoviesservicesService } from '../services/moviesservices.service';
import { GlobalVars } from '../globalv-Components';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Movies } from '../models/movies';
import { TopRatedService } from '../services/top-rated.service';
import { PageEvent } from '@angular/material/paginator';
import { Paginator } from '../models/paginator';
@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  maxcolumns = 8;
  isSelected = false;
  imageApis = GlobalVars.imagesPath;
  searchText: String = "";
  pageEvent!: PageEvent;
  pages: Paginator = { pageNumber: 1, paginatorLength: 1, pageSize: 20 };
  movies: Movies[] = [];
  searchmovies: Movies[] = [];
  constructor(public topratedService: TopRatedService,
    private moviesService: MoviesservicesService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.getMovies();
    this.topratedService.getMovies();
    this.manageMediaQuery();
  }

  manageMediaQuery() {
    this.breakpointObserver.observe(['(max-width:500px)', '(min-width:500px)', '(max-width:700px)', '(min-width:700px)', '(max-width:1300px)']).subscribe((state: BreakpointState) => {
      if (state.breakpoints["(max-width:1300px)"] && state.breakpoints["(min-width:700px)"]) {
        this.maxcolumns = 5;
      } else if (state.breakpoints["(max-width:700px)"] && state.breakpoints["(min-width:500px)"]) {
        this.maxcolumns = 3;

      }
      else if (state.breakpoints["(max-width:500px)"]) {
        this.maxcolumns = 2;

      }
      else {
        this.maxcolumns = 8;
      }
    })
  }

  /***gets Movies  */

  getMovies(Page = 1) {
    this.moviesService.getMovies(Page).subscribe(res => {
      this.searchmovies = this.movies = res["results"];
      this.pages.paginatorLength = res["total_pages"];
      this.pages.pageSize = res["results"].length;
      this.pages.pageNumber = res["page"];
    });
  }


  /***Filters Movies array with title */
  filter(title: string) {
    this.searchmovies = this.movies.filter((movie) => movie.title.includes(title))
  }


  onChange(_element: any) {
    this.filter(_element.target.value)
  }


  handlePage(event: any) {
    this.getMovies(event.pageIndex + 1);

  }
  linkClick(id: Number) {
    this.moviesService.getOpenVideo(id).subscribe(res => {
      var item = res["videos"]["results"].filter((mresult: { [x: string]: string; }) => mresult["site"] == 'YouTube')
      window.open(`https://www.youtube.com/watch?v=${item[0]["key"]}`, "_blank");
    });;
  }
}
