import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string){
      let errorMessage = "";
      if(!this.movies.includes(newTitle) && newTitle !== ""){
         this.movies.push(newTitle);
      } else {
         errorMessage = "Please enter a valid title!";
      }

      return errorMessage;
   }
}