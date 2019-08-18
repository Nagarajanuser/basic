import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExParent2Component } from './ex-parent2.component';

describe('ExParent2Component', () => {
  let component: ExParent2Component;
  let fixture: ComponentFixture<ExParent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExParent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExParent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
