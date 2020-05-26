import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDriverComponent } from './sidebar-driver.component';

describe('SidebardriverComponent', () => {
  let component: SidebarDriverComponent;
  let fixture: ComponentFixture<SidebarDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
