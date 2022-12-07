import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
