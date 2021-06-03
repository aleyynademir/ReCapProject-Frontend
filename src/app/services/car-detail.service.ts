import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/dto/car-detail';
import { CarDetailPage } from '../models/dto/car-detail-page';
import { ItemResponseModel } from '../models/response/item-response-model';
import { ListResponseModel } from '../models/response/list-response-model';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }


  getCarsDetails(carId:number):Observable<ItemResponseModel<CarDetailPage>>{
    let newPath = this.apiUrl+"cars/getcarsdetails?carId="+carId
    return this.httpClient.get<ItemResponseModel<CarDetailPage>>(newPath)
  }



  
}