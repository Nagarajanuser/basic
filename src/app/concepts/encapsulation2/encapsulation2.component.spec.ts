import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation2Component } from './encapsulation2.component';

describe('Encapsulation2Component', () => {
  let component: Encapsulation2Component;
  let fixture: ComponentFixture<Encapsulation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encapsulation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Encapsulation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
