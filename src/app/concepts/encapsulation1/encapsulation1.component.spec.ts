import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Encapsulation1Component } from './encapsulation1.component';

describe('Encapsulation1Component', () => {
  let component: Encapsulation1Component;
  let fixture: ComponentFixture<Encapsulation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Encapsulation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Encapsulation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
