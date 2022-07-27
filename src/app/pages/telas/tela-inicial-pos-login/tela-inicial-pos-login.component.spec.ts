import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialPosLoginComponent } from './tela-inicial-pos-login.component';

describe('TelaInicialPosLoginComponent', () => {
  let component: TelaInicialPosLoginComponent;
  let fixture: ComponentFixture<TelaInicialPosLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaInicialPosLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicialPosLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
