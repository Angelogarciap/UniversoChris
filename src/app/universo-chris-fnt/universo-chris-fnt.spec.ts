import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoChrisFnt } from './universo-chris-fnt';

describe('UniversoChrisFnt', () => {
  let component: UniversoChrisFnt;
  let fixture: ComponentFixture<UniversoChrisFnt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversoChrisFnt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversoChrisFnt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
