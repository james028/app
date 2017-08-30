import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  myWeather: Weather;

  constructor(private WService: WeatherService) { }

  /*onSubmit(WeatherForm: NgForm) {
      this.WService.searchCityWeather(WeatherForm.value.city).subscribe(
        data => {
          this.myWeather = new Weather(
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name,
                        data.name

          );
        
        }
      );
  }
*/

  ngOnInit() {
  }

}
