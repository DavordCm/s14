import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVehicularComponent } from './control-vehicular.component';

describe('ControlVehicularComponent', () => {
  let component: ControlVehicularComponent;
  let fixture: ComponentFixture<ControlVehicularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlVehicularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlVehicularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
