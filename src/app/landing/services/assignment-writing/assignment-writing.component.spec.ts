import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentWritingComponent } from './assignment-writing.component';

describe('AssignmentWritingComponent', () => {
  let component: AssignmentWritingComponent;
  let fixture: ComponentFixture<AssignmentWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
