import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackActionsComponent } from './hack-actions.component';

describe('HackActionsComponent', () => {
  let component: HackActionsComponent;
  let fixture: ComponentFixture<HackActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
