import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoDemandeComponent } from './depo-demande.component';

describe('DepoDemandeComponent', () => {
  let component: DepoDemandeComponent;
  let fixture: ComponentFixture<DepoDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
