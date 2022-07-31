import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionHeaderComponent } from './revision-header.component';

describe('RevisionHeaderComponent', () => {
  let component: RevisionHeaderComponent;
  let fixture: ComponentFixture<RevisionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
