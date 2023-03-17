import { Component, OnInit } from '@angular/core';
import { ApiWeather } from './models/weather.model';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  city: string = 'Wellington'
  weather?: ApiWeather


  
  constructor(private climaService: ClimaService){}

  ngOnInit(): void {
    this.obtenerClima(this.city)
  }


  obtenerClima(city: string){
    this.climaService.getClima(city).subscribe({
      next: (value) => {
        this.weather = value
      }
    })
    this.city = ''
  }



}
