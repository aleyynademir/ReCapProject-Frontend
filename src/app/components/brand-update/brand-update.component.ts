import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm:FormGroup;
  brands:Brand;
  

  constructor(
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getBrand(params['brandId']);
        
      }
    });
    this.createBrandUpdateForm();
  }


  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId:["", Validators.required],
      brandName:["",Validators.required]
    })
    
  }

  getBrand(brandId:number){
    this.brandService.getById(brandId).subscribe(response=>{
      this.brands = response.data
      console.log( response);
    })
  }

  update(){
    if(this.brandUpdateForm.valid){
      let BrandModel = Object.assign({id:this.brands.brandId},this.brandUpdateForm.value);
      this.brandService.update(BrandModel).subscribe(response=>{

      })
    }
  }
}
