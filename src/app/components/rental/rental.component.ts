import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/car-detail';
import { CarDetailPage } from 'src/app/models/dto/car-detail-page';
import { RentalDetail } from 'src/app/models/dto/rental-detail';
import { Rental } from 'src/app/models/entities/rental';
import { User } from 'src/app/models/entities/user';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  carId:number;
  users:User[];
  cars:CarDetail[];
  carDetail:CarDetailPage;
  rentals:RentalDetail[]=[];
  rentDate:Date;
  returnDate:Date;
  userId:number;
  @Input() car:CarDetail;


 
  constructor(
    private userService:UserService,
    private rentalService:RentalService,
    private router:Router,
    private carService:CarService,
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      if(params["carId"]){
        console.log(params)
        this.getCarsById(params["carId"])
        
      }
         this.getRentals()
         this.getUsers()
         //this.getCars();
    
  })}
       
  

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users = response.data;
      console.log(this.users)
    })
  }

 
  getCarsById(carId:number){
    this.carDetailService.getCarsDetails(carId).subscribe(response=>{
      this.carDetail = response.data;
      console.log(this.carDetail)
    })
  }
  
  getCars(){
   this.carService.getCars().subscribe(response=>{
    this.cars = response.data;
   })
  }

  getRentDate(){
    var today  = new Date();
    //min="1980-01-01"
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }
  getReturnDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0,10)
  }
  
  

  
}
