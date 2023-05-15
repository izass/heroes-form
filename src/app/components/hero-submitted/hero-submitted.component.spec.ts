import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSubmittedComponent } from './hero-submitted.component';

describe('HeroSubmittedComponent', () => {
  let component: HeroSubmittedComponent;
  let fixture: ComponentFixture<HeroSubmittedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroSubmittedComponent]
    });
    fixture = TestBed.createComponent(HeroSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
