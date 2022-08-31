import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  images = [
    {img:'../../../assets/slider/1.jpg', text:' No.1 Assignment Help Provider | Essay and Academic Assignment Writing.', summary:'Treat Assignment Help is No. 1 Academic Writing service provider along with Report Writing, Case Studies, Coursework Help, Thesis Help, Online Quizzes, and More.'},
    {img:'../../../assets/slider/2.jpg', text:'Your Trusted Source for Assignment Help',summary:'Prepare for your success with expert assistance in assignment writing, report writing, case studies, coursework help, thesis help, online quizzes, and more..'},
    {img:'../../../assets/slider/3.jpg',text:'Qualified Assignment Help for Every Student',summary:'We select the finest writers to join our writing team. Every each have expertise in specific topic fields and background in academic writing.'},
    {img:'../../../assets/slider/4.jpg',text:'Premium Assignment Help and Writing Services - @30% Off -  Best Price Guaranteed!',summary:'Get instant cheap assignment help & writing services from All subject experts. Treat Assignment Help offers reliable and A+ grades assignment help at 30% off.'},
    {img:'../../../assets/slider/5.jpg',text:'UNIVERSITY & COLLEGE AFFORDABLE ASSIGNMENT HELP ONLINE',summary:'Hire the Best and Affordable Writing Services of   Treat Assignment Help – Services That Are Perfect, Proficient and Professional.'}
  ]
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "autoplay":true  
  };  

  ngOnInit(): void {
  }

}
