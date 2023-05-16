import { Component } from '@angular/core';

@Component({
  selector: 'app-ipads',
  templateUrl: './ipads.component.html',
  styleUrls: ['./ipads.component.css']
})
export class IpadsComponent {
  showMoreInfo = false;
  showMoreInfo1 = false;
  showMoreInfo2 = false;


  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }

  showMore1(){
    this.showMoreInfo1 = !this.showMoreInfo1;
  }

  showMore2(){
    this.showMoreInfo2 = !this.showMoreInfo2;
  }
}
