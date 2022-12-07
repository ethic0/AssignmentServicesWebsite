import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissertationWritingComponent } from './dissertation-writing.component';

describe('DissertationWritingComponent', () => {
  let component: DissertationWritingComponent;
  let fixture: ComponentFixture<DissertationWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DissertationWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DissertationWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
