import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/dto/car-detail';
import { ListResponseModel } from '../models/response/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44356/api/"
  
  constructor(private httpClient:HttpClient) { }
  

  getCars():Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
     
    }
  
    getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>> {
      let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
      return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycolor?colorId="+ colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

}

  getCarsByBrandandColor(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}