import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Child1Component } from './ex2-child1.component';

describe('Ex2Child1Component', () => {
  let component: Ex2Child1Component;
  let fixture: ComponentFixture<Ex2Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
