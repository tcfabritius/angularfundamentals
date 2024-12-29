import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NroComponent } from './nro.component';

describe('NroComponent', () => {
  let component: NroComponent;
  let fixture: ComponentFixture<NroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
