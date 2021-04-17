import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/car-detail';
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

  carDetails:CarDetail;
  carImages:CarImage[]=[];
  rentals:RentalDetail[];
  rentalsById:RentalDetail[];
  
  constructor(
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private carImagesByIdService:CarImageService,
    private rentalService:RentalService
    
    
    ) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getById(params["id"])
        this.getImagesById(params["id"])
  }
})
  }

  getById(id:number){
    this.carDetailService.getById(id).subscribe(response=>{
      this.carDetails = response.data[0];
    })
  }



  getImagesById(id:number){
    this.carImagesByIdService.getCarImages(id).subscribe(response=>{
      this.carImages=response.data;
      
    })
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    })
  }

  getRentalsById(id:number){
    this.rentalService.GetById(id).subscribe(response=>{
      this.rentalsById=response.data;

    })
  }
  }
