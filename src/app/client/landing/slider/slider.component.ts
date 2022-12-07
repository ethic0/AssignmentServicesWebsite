import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/_services/service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  orderForm:any;
  constructor(private formBuilder:FormBuilder, private addData:Service) {
    this.orderForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      type: ['',Validators.required],
      subject:['',Validators.required],
      country:['', Validators.required],
      wordCount:['',Validators.required],
      phone:['',[Validators.required,Validators.minLength(10), Validators.maxLength(15)]],
      deadline:['',Validators.required],
      brief:['']
    });
   }

 
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

  sendOrder(){
    console.log(this.orderForm);
    console.log(this.orderForm.value);
    let formData = this.orderForm.value;
    let randomId = (Math.random() + 1).toString(36).substring(3).toUpperCase();
    this.addData.addRequest(randomId, formData);
    this.orderForm.reset();
    // for (let i in this.orderForm) {
    //   if (this.orderForm[i] instanceof Blob){  //  Check if key value is file
    //     uploadData.append(i, this.orderForm[i], this.orderForm[i].name ? this.orderForm[i].name : "");
    //   }
    //   else
    //     uploadData.append(i, this.orderForm[i]);
    // }
  }
  // getFile(e){
  //   let allowedExtension = {
  //     "docx":true, 
  //     "doc":true, 
  //     "pdf":true,
  //     "pptx":true,
  //     "odt":true,
  //     "rtf":true,
  //     "png":true, 
  //     "jpeg":true,
  //     "jpg":true,
  //     "zip":true
  //   };
  //   console.log(e.target.files);
  //   if(e.target.files[0].size / 1024 / 1024 > 20 ){
  //     alert("Maximum File Size should be less than 20MB.")
  //     return;
  //   }
  //   if(allowedExtension){
  //     var nam = e.target.files[0].name.split('.').pop();
  //     if(!allowedExtension){
  //       alert("Please Upload " + Object.keys(allowedExtension) + " file.")
  //       return;
  //     }
  //   }
  //   this.orderForm.controls["brief"].setValue(e.target.files[0]);
  // }
  ngOnInit(): void {
  }

}
