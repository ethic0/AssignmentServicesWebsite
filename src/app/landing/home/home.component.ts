import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
