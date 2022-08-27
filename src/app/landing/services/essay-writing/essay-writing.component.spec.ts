import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayWritingComponent } from './essay-writing.component';

describe('EssayWritingComponent', () => {
  let component: EssayWritingComponent;
  let fixture: ComponentFixture<EssayWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssayWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
