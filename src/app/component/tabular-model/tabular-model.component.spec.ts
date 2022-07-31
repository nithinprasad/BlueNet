import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularModelComponent } from './tabular-model.component';

describe('TabularModelComponent', () => {
  let component: TabularModelComponent;
  let fixture: ComponentFixture<TabularModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
