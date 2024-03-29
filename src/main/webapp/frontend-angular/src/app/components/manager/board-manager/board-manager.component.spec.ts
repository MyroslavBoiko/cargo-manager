import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardManagerComponent } from './board-manager.component';

describe('BoardAdminComponent', () => {
  let component: BoardManagerComponent;
  let fixture: ComponentFixture<BoardManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
