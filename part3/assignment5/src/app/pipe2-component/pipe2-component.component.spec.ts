import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe2ComponentComponent } from './pipe2-component.component';

describe('Pipe2ComponentComponent', () => {
  let component: Pipe2ComponentComponent;
  let fixture: ComponentFixture<Pipe2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipe2ComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pipe2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
