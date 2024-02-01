import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chainingpipes';
  DOB=new Date(1947,8,11)
  name:string="Ajeet";
  article:string="hello world";
  position:string="pipes in the Angular";
  
}
