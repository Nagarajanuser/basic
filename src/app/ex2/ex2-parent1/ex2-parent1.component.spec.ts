import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Parent1Component } from './ex2-parent1.component';

describe('Ex2Parent1Component', () => {
  let component: Ex2Parent1Component;
  let fixture: ComponentFixture<Ex2Parent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2Parent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2Parent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
