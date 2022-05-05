import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './Home/home.component';
import { MyFavourites } from './MyFavourites/my-favourites.component';
import { WeatherComponent } from './Weather/weather.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'my-favourites', component: MyFavourites }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
