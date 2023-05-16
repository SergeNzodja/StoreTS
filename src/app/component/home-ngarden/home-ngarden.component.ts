import { Component } from '@angular/core';

@Component({
  selector: 'app-home-ngarden',
  templateUrl: './home-ngarden.component.html',
  styleUrls: ['./home-ngarden.component.css']
})
export class HomeNgardenComponent {
  selectedSubMenu: string | undefined;

  showHomeDecor(event: Event) {
    event.preventDefault();
    this.showHomeDecor1();
  }
  showHomeDecor1() {
    this.selectedSubMenu = 'homeNDecor';
  }

  showFans(){
    this.selectedSubMenu = 'fansNairConditionner';
  }

  showFurniture(){
    this.selectedSubMenu = 'furniture';

  }
  
  showGrills(){
    this.selectedSubMenu = 'grills';

  }
  showVacuumCleaners(){
    this.selectedSubMenu = 'vacuumCleaners';

  }
  showGardeningNLawnCare(){
    this.selectedSubMenu = 'gardeningNLawnCare';

  }
  showOutdoorLiving(){
    this.selectedSubMenu = 'outdoorLiving';

  }
  showSmartHome(){
    this.selectedSubMenu = 'smartHome';

  }
}
