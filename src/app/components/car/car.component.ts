import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/car-detail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:CarDetail[]=[];

  constructor(
    private carService:CarService, 
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])

      } if(params["brandId"] && params["colorId"])
      {
        this.getCarsByBrandAndColor(params["brandId"],params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }
   

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
     
    }

    getCarsByBrand(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.cars = response.data
      })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
    })

 
  }

  getCarsByBrandAndColor(brandId:number,colorId:number) {
    this.carService.getCarsByBrandandColor(brandId,colorId).subscribe(response=>{
      this.cars=response.data;
    });
  }

}
