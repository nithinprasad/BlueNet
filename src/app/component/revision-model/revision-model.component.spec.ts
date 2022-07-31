import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionModelComponent } from './revision-model.component';

describe('RevisionModelComponent', () => {
  let component: RevisionModelComponent;
  let fixture: ComponentFixture<RevisionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
