import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colorUpdateForm:FormGroup;
  colors:Color;
  

  constructor(
    private formBuilder:FormBuilder,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getColor(params['colorId']);
        
      }
    });
    this.createColorUpdateForm();
  }


  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorId:["", Validators.required],
      colorName:["",Validators.required]
    })
    
  }

  getColor(colorId:number){
    this.colorService.getById(colorId).subscribe(response=>{
      this.colors = response.data
      console.log(response);
    })
  }

  update(){
    if(this.colorUpdateForm.valid){
      let ColorModel = Object.assign({id:this.colors.colorId},this.colorUpdateForm.value);
      this.colorService.update(ColorModel).subscribe(response=>{

      })
    }
  }
}
