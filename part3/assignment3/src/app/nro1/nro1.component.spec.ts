import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nro1Component } from './nro1.component';

describe('Nro1Component', () => {
  let component: Nro1Component;
  let fixture: ComponentFixture<Nro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nro1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
