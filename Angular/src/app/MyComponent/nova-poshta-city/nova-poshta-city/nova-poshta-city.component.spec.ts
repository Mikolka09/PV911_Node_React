import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPoshtaCityComponent } from './nova-poshta-city.component';

describe('NovaPoshtaCityComponent', () => {
  let component: NovaPoshtaCityComponent;
  let fixture: ComponentFixture<NovaPoshtaCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaPoshtaCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPoshtaCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
