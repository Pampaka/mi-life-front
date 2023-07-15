import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationsPageComponent } from './innovations-page.component';

describe('InnovationsPageComponent', () => {
  let component: InnovationsPageComponent;
  let fixture: ComponentFixture<InnovationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnovationsPageComponent]
    });
    fixture = TestBed.createComponent(InnovationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
