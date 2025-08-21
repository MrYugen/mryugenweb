import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizacionPageComponent } from './automatizacion-page.component';

describe('AutomatizacionPageComponent', () => {
  let component: AutomatizacionPageComponent;
  let fixture: ComponentFixture<AutomatizacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatizacionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomatizacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});