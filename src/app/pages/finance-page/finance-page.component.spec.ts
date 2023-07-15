import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePageComponent } from './finance-page.component';

describe('FinancePageComponent', () => {
  let component: FinancePageComponent;
  let fixture: ComponentFixture<FinancePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancePageComponent]
    });
    fixture = TestBed.createComponent(FinancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
