import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisHelpComponent } from './thesis-help.component';

describe('ThesisHelpComponent', () => {
  let component: ThesisHelpComponent;
  let fixture: ComponentFixture<ThesisHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
