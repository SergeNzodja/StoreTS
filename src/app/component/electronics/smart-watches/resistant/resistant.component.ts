import { Component } from '@angular/core';

@Component({
  selector: 'app-resistant',
  templateUrl: './resistant.component.html',
  styleUrls: ['./resistant.component.css']
})
export class ResistantComponent {
  showMoreInfo = false;
  showMoreInfo1 = false;

  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }

  showMore1(){
    this.showMoreInfo1 = !this.showMoreInfo1;
  }
}
