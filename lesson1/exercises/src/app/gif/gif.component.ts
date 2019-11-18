import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gif = "https://media.giphy.com/media/z9AUvhAEiXOqA/giphy.gif";
  constructor() { }

  ngOnInit() {
  }

}
