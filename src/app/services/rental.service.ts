import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from '../models/dto/rental-detail';
import { ListResponseModel } from '../models/response/list-response-model';
import { ResponseModel } from '../models/response/response-model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetail>>{
    let newPath = this.apiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }


  AddRental(rental:RentalDetail):Observable<ResponseModel>{
    let path = this.apiUrl+"rentals/add"
    return this.httpClient.post<ResponseModel>(path,rental);
  }

  GetById(id:number):Observable<ListResponseModel<RentalDetail>>{
    let newPath=this.apiUrl+"rentals/getbyid?id="+id;
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath)
  }
}
