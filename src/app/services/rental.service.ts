import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from '../models/dto/rental-detail';
import { ItemResponseModel } from '../models/response/item-response-model';
import { ListResponseModel } from '../models/response/list-response-model';
import { ResponseModel } from '../models/response/response-model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl+"rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }

  addRental(rental:RentalDetail):Observable<ResponseModel>{
    let newPath = this.apiUrl+"rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }

  getRentalById(carId:number):Observable<ListResponseModel<RentalDetail>>{
    let newpath = this.apiUrl+"rentals/getbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newpath);
  }

  
}
