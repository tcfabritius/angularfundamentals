import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe1ComponentComponent } from './pipe1-component.component';

describe('Pipe1ComponentComponent', () => {
  let component: Pipe1ComponentComponent;
  let fixture: ComponentFixture<Pipe1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipe1ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pipe1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
