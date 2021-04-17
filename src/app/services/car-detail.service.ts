import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/dto/car-detail';
import { ListResponseModel } from '../models/response/list-response-model';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }


  getById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"cars/getcardetailsbyid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }



  
}