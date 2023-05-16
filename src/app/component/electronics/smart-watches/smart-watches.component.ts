import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-watches',
  templateUrl: './smart-watches.component.html',
  styleUrls: ['./smart-watches.component.css']
})
export class SmartWatchesComponent{
  showMoreInfo = false;
  showMoreInfo1 = false;

  showMore(){
      this.showMoreInfo = !this.showMoreInfo;
  }

  showMore1(){
    this.showMoreInfo1 = !this.showMoreInfo1;
  }
}
