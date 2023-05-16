import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { HomeNgardenComponent } from './component/home-ngarden/home-ngarden.component';
import { KitchenNdiningComponent } from './component/kitchen-ndining/kitchen-ndining.component';
import { ClothingNaccessoriesComponent } from './component/clothing-naccessories/clothing-naccessories.component';
import { MoreCategoriesComponent } from './component/more-categories/more-categories.component';
import { SmartWatchesComponent } from './component/electronics/smart-watches/smart-watches.component';
import { IpadsComponent } from './component/electronics/ipads/ipads.component';
import { LedsComponent } from './component/electronics/leds/leds.component';
import { SpeakersComponent } from './component/electronics/speakers/speakers.component';
import { LaptopsComponent } from './component/electronics/laptops/laptops.component';
import { WebcamsComponent } from './component/electronics/webcams/webcams.component';
import { OthersComponent } from './component/electronics/others/others.component';
import { AboutComponent } from './component/about/about.component';
import { SportsComponent } from './component/electronics/smart-watches/sports/sports.component';
import { BoujeeComponent } from './component/electronics/smart-watches/boujee/boujee.component';
import { ResistantComponent } from './component/electronics/smart-watches/resistant/resistant.component';
import { MenComponent } from './component/clothing-naccessories/men/men.component';
import { WomenComponent } from './component/clothing-naccessories/women/women.component';
import { ChildrenComponent } from './component/clothing-naccessories/children/children.component';
import { HomeDecoreComponent } from './component/home-ngarden/home-decore/home-decore.component';
import { VacuumCleanersComponent } from './component/home-ngarden/vacuum-cleaners/vacuum-cleaners.component';
import { FurnitureComponent } from './component/home-ngarden/furniture/furniture.component';
import { FansNairConditioningComponent } from './component/home-ngarden/fans-nair-conditioning/fans-nair-conditioning.component';
import { GrillsComponent } from './component/home-ngarden/grills/grills.component';
import { GardenNLawnCareComponent } from './component/home-ngarden/garden-nlawn-care/garden-nlawn-care.component';
import { OutdoorLivingComponent } from './component/home-ngarden/outdoor-living/outdoor-living.component';
import { SmartHomeComponent } from './component/home-ngarden/smart-home/smart-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    HomeNgardenComponent,
    KitchenNdiningComponent,
    ClothingNaccessoriesComponent,
    MoreCategoriesComponent,
    SmartWatchesComponent,
    IpadsComponent,
    LedsComponent,
    SpeakersComponent,
    LaptopsComponent,
    WebcamsComponent,
    OthersComponent,
    AboutComponent,
    SportsComponent,
    BoujeeComponent,
    ResistantComponent,
    MenComponent,
    WomenComponent,
    ChildrenComponent,
    HomeDecoreComponent,
    VacuumCleanersComponent,
    FurnitureComponent,
    FansNairConditioningComponent,
    GrillsComponent,
    GardenNLawnCareComponent,
    OutdoorLivingComponent,
    SmartHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
