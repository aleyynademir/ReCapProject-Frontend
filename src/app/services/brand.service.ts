import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/entities/brand';
import { ItemResponseModel } from '../models/response/item-response-model';
import { ListResponseModel } from '../models/response/list-response-model';
import { ResponseModel } from '../models/response/response-model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44356/api/"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
   let newPath = this.apiUrl+"brands/add"
   return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl+"brands/update"
    return this.httpClient.post<ResponseModel>(newPath,brand)
}

getById(brandId:number):Observable<ItemResponseModel<Brand>>{
  let newPath = this.apiUrl+"brands/getbyid?brandId="+brandId
  return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
}
}
