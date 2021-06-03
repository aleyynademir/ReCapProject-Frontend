import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/entities/color';
import { ItemResponseModel } from '../models/response/item-response-model';
import { ListResponseModel } from '../models/response/list-response-model';
import { ResponseModel } from '../models/response/response-model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl +"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getById(colorId:number):Observable<ItemResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getbyid?colorId="+colorId
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }

  update(Color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+"colors/update"
    return this.httpClient.post<ResponseModel>(newPath,Color);
  }

  add(Color:Color):Observable<ResponseModel>{
    let newPath = this.apiUrl+"colors/add"
    return this.httpClient.post<ResponseModel>(newPath,Color);
  }
}
