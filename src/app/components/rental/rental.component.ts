import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/dto/car-detail';
import { RentalDetail } from 'src/app/models/dto/rental-detail';
import { User } from 'src/app/models/entities/user';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDetail[]=[];
  rentalsAdd:RentalDetail;
  rentalsById:RentalDetail[]=[];
  cars:CarDetail[];
  carDetails:CarDetail;
  users:User[];
  userDetail:User;
  dailyPrice:number;
  firstName:string;
  lastName:string;
  rentDate:Date;
  returnDate:Date;
  unitPrice:number;
 
  constructor(
    private rentalService:RentalService,
    private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private userService:UserService,
    private CarDetailService:CarDetailService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }


  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users = response.data;
    })
  }

  getRentDate(){
    var today = new Date();
    today.setDate(today.getDate()+1);
    return today.toISOString().slice(0,10)
  }

  getReturnDate(){
    var today = new Date();
    today.setDate(today.getDate()+2);
    return today.toISOString().slice(0,10)
  }

  createRental(){
    
  }
  
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
    })
  }

  getCarsById(id:number){
    this.CarDetailService.getById(id).subscribe(response=>{
      this.carDetails = response.data[0];
    })
  }
}
