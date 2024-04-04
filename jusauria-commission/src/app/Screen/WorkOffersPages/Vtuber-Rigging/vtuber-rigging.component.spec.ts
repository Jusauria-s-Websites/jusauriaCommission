import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTuberRiggingComponent } from './vtuber-rigging.component';

describe('VTuberRiggingComponent', () => {
  let component: VTuberRiggingComponent;
  let fixture: ComponentFixture<VTuberRiggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTuberRiggingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VTuberRiggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
