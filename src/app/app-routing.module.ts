import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/pages/heroes/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/pages/heroes/heroes/heroes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'character-list', loadChildren: () => import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
  { path: 'character-details/:id', loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
