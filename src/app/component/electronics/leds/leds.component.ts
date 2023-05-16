import { Component } from '@angular/core';

@Component({
  selector: 'app-leds',
  templateUrl: './leds.component.html',
  styleUrls: ['./leds.component.css']
})
export class LedsComponent {
  showMoreInfo = false;

  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }
}
