import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/dto/car-detail';
import { Car } from '../models/entities/car';
import { ItemResponseModel } from '../models/response/item-response-model';
import { ListResponseModel } from '../models/response/list-response-model';
import { ResponseModel } from '../models/response/response-model';

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

  getCarList():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCar(carId:Number):Observable<ItemResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbyid?carId="+carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
     
    }
   getCarsByBrandandColor(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  
  add(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl+"cars/add"
    return this.httpClient.post<ResponseModel>(newPath,car)

}

  update(car:Car):Observable<ResponseModel>{
  let newPath = this.apiUrl+"cars/update"
  return this.httpClient.post<ResponseModel>(newPath,car);
}

 
}