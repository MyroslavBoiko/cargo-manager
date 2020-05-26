import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTransportComponent } from './driver-transport.component';

describe('DriverTransportComponent', () => {
  let component: DriverTransportComponent;
  let fixture: ComponentFixture<DriverTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
