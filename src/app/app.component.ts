import { Component, signal } from '@angular/core';
import { ApiService } from './api.service';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
  getdata:any[]=[]
  weatherdata: any = null;
   city:string="";
  error:string=''
  constructor(private apiser:ApiService){

  }










  ngOnInit(): void {


    this.searchWeather()
  }

  searchWeather(){
if(this.city.trim()){
  this.apiser.getWeather(this.city).subscribe(data=>{
    this.weatherdata=data;
    console.log(this.weatherdata);
    this.error=''
  },_err=>{
    this.weatherdata=null;
    this.error="'City not found or invalid API key. Please try again.'"
  }
);
}else{
  this.error="Please enter a city name"
}
  }

 
}
