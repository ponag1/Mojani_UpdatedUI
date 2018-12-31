import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private location: Location) { 
      var pathString = location.path();
      console.log('appComponent: pathString...');
      console.log(pathString);    
      

  }
}
