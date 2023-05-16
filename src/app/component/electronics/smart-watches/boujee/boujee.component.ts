import { Component } from '@angular/core';

@Component({
  selector: 'app-boujee',
  templateUrl: './boujee.component.html',
  styleUrls: ['./boujee.component.css']
})
export class BoujeeComponent {
  showMoreInfo = false;
  showMoreInfo1 = false;

  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }

  showMore1(){
    this.showMoreInfo1 = !this.showMoreInfo1;
  }
}
