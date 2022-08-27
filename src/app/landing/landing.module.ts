import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel'; 

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { LandingRoutingModule } from './landing-routing-module';
import { SliderComponent } from './slider/slider.component';
import { AssignmentWritingComponent } from './services/assignment-writing/assignment-writing.component';
import { AcademicWritingComponent } from './services/academic-writing/academic-writing.component';
import { DissertationWritingComponent } from './services/dissertation-writing/dissertation-writing.component';
import { EssayWritingComponent } from './services/essay-writing/essay-writing.component';
import { CaseStudyComponent } from './services/case-study/case-study.component';
import { ProgrammingHelpComponent } from './services/programming-help/programming-help.component';
import { ThesisHelpComponent } from './services/thesis-help/thesis-help.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PricingComponent,
    SliderComponent,
    AssignmentWritingComponent,
    AcademicWritingComponent,
    DissertationWritingComponent,
    EssayWritingComponent,
    CaseStudyComponent,
    ProgrammingHelpComponent,
    ThesisHelpComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SlickCarouselModule,

  ]
})
export class LandingModule { }
