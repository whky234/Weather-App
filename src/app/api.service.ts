import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = '7bad28e8e548cc694dfeb2d5f25d0663';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${this.api}&units=metric&q=`;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}`);
  }

  // private api='https://projectapi.gerasim.in/api/Complaint/GetParentDepartment';

  // getAlldep(){
  // return  this.http.get(this.api);
  // }
}
