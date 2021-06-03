import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/car-detail';
import { CarDetailPage } from 'src/app/models/dto/car-detail-page';
import { RentalDetail } from 'src/app/models/dto/rental-detail';
import { CarImage } from 'src/app/models/entities/car-image';
import { ResponseModel } from 'src/app/models/response/response-model';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetailPage;
  carImages:CarImage[]=[];
  rentals:CarDetailPage;
  rentalsById:RentalDetail[];
  imageUrl ="https://localhost:44356/";
  
  constructor(
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private carImagesByIdService:CarImageService,
    private rentalService:RentalService
    
    
    ) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getById(params["carId"])
  }
})
  }

  getById(carId:number){
    this.carDetailService.getCarsDetails(carId).subscribe(response=>{
      this.carDetails = response.data;
      console.log(this.carDetails.carImages)
    })
  }



  getImagesById(carId:number){
    this.carImagesByIdService.getCarImages(carId).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }
/*
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    })
  }
*/
  getRentalsById(rentalId:number){
    this.rentalService.getRentalById(rentalId).subscribe(response=>{
      this.rentalsById=response.data;

    })
  }

  getImagePath(image:string){
    return this.imageUrl + image;
  }
  }
