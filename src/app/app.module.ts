import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/pages/heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/pages/heroes/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/pages/heroes/hero-search/hero-search.component';
import { HeroesComponent } from './components/pages/heroes/heroes/heroes.component';
import { MessagesComponent } from './components/pages/heroes/messages/messages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
