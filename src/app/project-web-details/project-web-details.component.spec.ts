import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebDetailsComponent } from './project-web-details.component';

describe('ProjectWebDetailsComponent', () => {
  let component: ProjectWebDetailsComponent;
  let fixture: ComponentFixture<ProjectWebDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectWebDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWebDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});