import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Parent1Component } from './ex1-parent1.component';

describe('Ex1Parent1Component', () => {
  let component: Ex1Parent1Component;
  let fixture: ComponentFixture<Ex1Parent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1Parent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
