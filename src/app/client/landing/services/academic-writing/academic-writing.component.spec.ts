import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicWritingComponent } from './academic-writing.component';

describe('AcademicWritingComponent', () => {
  let component: AcademicWritingComponent;
  let fixture: ComponentFixture<AcademicWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
