import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx';

import { Weather } from './weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  
  myWeather: Weather;
  location;
  
  constructor(private WService: WeatherService) {}


  ngOnInit() {
    //this.myWeather = this.WService.WeatherNow();
    //navigator.geolocation.getCurrentPosition(pos => {
        //this.location = pos.coords;

        //console.log(this.location);

        //const lat = this.location.latitude;
        //const lon = this.location.longitude;

        this.WService.locationWeather().subscribe(
          data => {
            console.log(data);
            this.myWeather = new Weather(
                  data.name,
                  data.country,
                  data.main.temp,
                  data.weather[0].icon,
                  data.weather[0].description,
                  data.main.humidity,
                  data.main.pressure,
                  data.wind.speed,
                  data.wind.deg,
                  data.sys.sunrise,
                  data.sys.sunset,
                  data.clouds.all
            )
          }
        );
    //});
  }

    onSubmit(weatherForm: NgForm) {
        console.log(NgForm);
        this.WService.nextCityWeather(weatherForm.value.city).subscribe(
          (data) => {
            console.log(data);
                this.myWeather = new Weather(
                        data.name,
                        data.sys.country,
                        data.weather[0].icon,
                        data.main.temp,
                        data.weather[0].description,
                        data.main.humidity,
                        data.main.pressure,
                        data.wind.speed,
                        data.wind.deg,
                        data.sys.sunrise,
                        data.sys.sunset,
                        data.clouds.all
              
            )
          }
        )
        //this.weatherForm.value.city.patchValue(null);
    }

}
