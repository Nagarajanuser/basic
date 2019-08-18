import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExChild2Component } from './ex-child2.component';

describe('ExChild2Component', () => {
  let component: ExChild2Component;
  let fixture: ComponentFixture<ExChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
