import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  images = [
    {img:'../../../assets/slider/1.jpg'},
    {img:'../../../assets/slider/2.jpg'},
    {img:'../../../assets/slider/3.jpg'},
    {img:'../../../assets/slider/4.jpg'},
    {img:'../../../assets/slider/5.jpg'}
  ]
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "auto":true  
  };  

  ngOnInit(): void {
  }

}
