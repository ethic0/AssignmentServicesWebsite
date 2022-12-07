import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import {CdkAccordionModule} from '@angular/cdk/accordion';

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
import { DoneComponent } from './done/done.component';



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
    DoneComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SlickCarouselModule,
    FormsModule, 
    ReactiveFormsModule,
    CdkAccordionModule

  ]
})
export class LandingModule { }
