import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  showMoreInfo = false;
  showMoreInfo1 = false;

  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }

  showMore1(){
    this.showMoreInfo1 = !this.showMoreInfo1;
  }
}
