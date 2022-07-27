import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDeUmGameComponent } from './detalhe-de-um-game.component';

describe('DetalheDeUmGameComponent', () => {
  let component: DetalheDeUmGameComponent;
  let fixture: ComponentFixture<DetalheDeUmGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheDeUmGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDeUmGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
