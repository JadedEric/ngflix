import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStripComponent } from './landing-strip.component';

describe('LandingStripComponent', () => {
  let component: LandingStripComponent;
  let fixture: ComponentFixture<LandingStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
