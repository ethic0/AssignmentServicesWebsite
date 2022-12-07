import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingHelpComponent } from './programming-help.component';

describe('ProgrammingHelpComponent', () => {
  let component: ProgrammingHelpComponent;
  let fixture: ComponentFixture<ProgrammingHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
