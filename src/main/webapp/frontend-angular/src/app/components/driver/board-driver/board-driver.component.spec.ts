import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDriverComponent } from './board-driver.component';

describe('BoardModeratorComponent', () => {
  let component: BoardDriverComponent;
  let fixture: ComponentFixture<BoardDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
