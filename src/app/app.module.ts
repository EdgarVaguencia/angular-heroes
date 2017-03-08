import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchService } from './hero-search.service';

// Fake import loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
