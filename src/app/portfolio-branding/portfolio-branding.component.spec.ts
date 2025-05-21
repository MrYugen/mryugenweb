import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBrandingComponent } from './portfolio-branding.component';

describe('PortfolioBrandingComponent', () => {
  let component: PortfolioBrandingComponent;
  let fixture: ComponentFixture<PortfolioBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBrandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
