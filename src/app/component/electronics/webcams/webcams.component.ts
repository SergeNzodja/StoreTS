import { Component } from '@angular/core';

@Component({
  selector: 'app-webcams',
  templateUrl: './webcams.component.html',
  styleUrls: ['./webcams.component.css']
})
export class WebcamsComponent {
  showMoreInfo = false;


  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }
}
