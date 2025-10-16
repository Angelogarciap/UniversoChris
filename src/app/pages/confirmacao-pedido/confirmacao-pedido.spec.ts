import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoPedido } from './confirmacao-pedido';

describe('ConfirmacaoPedido', () => {
  let component: ConfirmacaoPedido;
  let fixture: ComponentFixture<ConfirmacaoPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoPedido],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
