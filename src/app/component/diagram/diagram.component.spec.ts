import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramComponents } from './diagram.component';

describe('DiagramComponent', () => {
  let component: DiagramComponents;
  let fixture: ComponentFixture<DiagramComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
