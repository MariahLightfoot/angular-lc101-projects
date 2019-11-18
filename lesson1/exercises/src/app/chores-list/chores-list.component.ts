import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['LaunchCode Stuff', 'Have Fun', 'Have More Fun'];

   constructor() { }

   ngOnInit() {
   }

}