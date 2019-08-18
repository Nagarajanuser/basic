import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventemitter1Component } from './eventemitter1.component';

describe('Eventemitter1Component', () => {
  let component: Eventemitter1Component;
  let fixture: ComponentFixture<Eventemitter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventemitter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventemitter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
