import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/entities/brand';
import { Car } from 'src/app/models/entities/car';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  car:Car;
  brands: Brand[];
  colors: Color[];
  carUpdateForm :FormGroup;


  constructor(
    private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getBrands();
        this.getColors();
        this.getCar(params['carId']);
        this.createCarUpdateForm();

      }
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  getCar(carId:number){
    this.carService.getCar(carId).subscribe(response=>{
      this.car = response.data
    })
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['',[Validators.required, Validators.min(1970)]],
      unitPrice: ['', [Validators.required, Validators.min(0)]]
    })
  }

  update(){
    if(this.carUpdateForm.valid) {
      let carModel = Object.assign({carId:this.car.carId}, this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{

      })
    }
  }
}