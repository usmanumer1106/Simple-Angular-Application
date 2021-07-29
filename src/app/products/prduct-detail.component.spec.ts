import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrductDetailComponent } from './prduct-detail.component';

describe('PrductDetailComponent', () => {
  let component: PrductDetailComponent;
  let fixture: ComponentFixture<PrductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
