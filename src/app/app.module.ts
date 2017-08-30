import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather/weather-search.component';
import { WeatherItemComponent } from './weather/weather-item.component';

import { WeatherService } from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
