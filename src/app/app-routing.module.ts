import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { ClothingNaccessoriesComponent } from './component/clothing-naccessories/clothing-naccessories.component';
import { HomeNgardenComponent } from './component/home-ngarden/home-ngarden.component';
import { KitchenNdiningComponent } from './component/kitchen-ndining/kitchen-ndining.component';
import { MoreCategoriesComponent } from './component/more-categories/more-categories.component';
import { SmartWatchesComponent } from './component/electronics/smart-watches/smart-watches.component';
import { IpadsComponent } from './component/electronics/ipads/ipads.component';
import { LedsComponent } from './component/electronics/leds/leds.component';
import { SpeakersComponent } from './component/electronics/speakers/speakers.component';
import { AboutComponent } from './component/about/about.component';
import { SportsComponent } from './component/electronics/smart-watches/sports/sports.component';
import { BoujeeComponent } from './component/electronics/smart-watches/boujee/boujee.component';
import { ResistantComponent } from './component/electronics/smart-watches/resistant/resistant.component';
import { OthersComponent } from './component/electronics/others/others.component';
import { LaptopsComponent } from './component/electronics/laptops/laptops.component';
import { WebcamsComponent } from './component/electronics/webcams/webcams.component';
import { MenComponent } from './component/clothing-naccessories/men/men.component';
import { WomenComponent } from './component/clothing-naccessories/women/women.component';
import { ChildrenComponent } from './component/clothing-naccessories/children/children.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/about', component: AboutComponent},
  {path: 'components/electronics', component: ElectronicsComponent},
  {path: 'components/clothing-naccessories', component: ClothingNaccessoriesComponent},
  {path: 'components/home-ngarden', component: HomeNgardenComponent},
  {path: 'components/kitchen-ndining', component: KitchenNdiningComponent},
  {path: 'components/more-categories', component: MoreCategoriesComponent},
  {path: 'component/electronics/smart-watches', component: SmartWatchesComponent},
  {path: 'component/electronics/ipads', component: IpadsComponent},
  {path: 'component/electronics/leds', component: LedsComponent},
  {path: 'component/electronics/speakers', component: SpeakersComponent},
  {path: 'component/electronics/laptops', component: LaptopsComponent},
  {path: 'component/electronics/webcams', component: WebcamsComponent},
  {path: 'component/electronics/others', component: OthersComponent},
  {path: 'component/electronics/smart-watches/boujee', component: BoujeeComponent},
  {path: 'component/electronics/smart-watches/sports', component: SportsComponent},
  {path: 'component/electronics/smart-watches/resistant', component: ResistantComponent},
  {path: 'component/electronics/smart-watches/others', component: OthersComponent},
  {path: 'component/clothing-naccessories/men', component: MenComponent},
  {path: 'component/clothing-naccessories/women', component: WomenComponent},
  {path: 'component/clothing-naccessories/children', component: ChildrenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
