
export class GlobalVars{

   
   public static apikey= 'd997759e9f65bd977f489dd20c4c0b9c';
   private static apiurl= 'https://api.themoviedb.org';
   public static moviesApi:string =`${this.apiurl}/3/discover/movie?api_key=${this.apikey}`;
   public static topRatedMoviesApi:string =`${this.apiurl}/3/movie/top_rated?api_key=${this.apikey}`;
   public static imagesPath:string ='https://image.tmdb.org/t/p/w500';
}