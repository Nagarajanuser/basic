import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Child1Component } from './ex1-child1.component';

describe('Ex1Child1Component', () => {
  let component: Ex1Child1Component;
  let fixture: ComponentFixture<Ex1Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1Child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
