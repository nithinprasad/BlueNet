import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStepsComponent } from './side-steps.component';

describe('SideStepsComponent', () => {
  let component: SideStepsComponent;
  let fixture: ComponentFixture<SideStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
