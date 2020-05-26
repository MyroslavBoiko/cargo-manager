import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCustomerComponent } from './board-customer.component';

describe('BoardUserComponent', () => {
  let component: BoardCustomerComponent;
  let fixture: ComponentFixture<BoardCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
