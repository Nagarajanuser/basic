import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentchild2Component } from './parentchild2.component';

describe('Parentchild2Component', () => {
  let component: Parentchild2Component;
  let fixture: ComponentFixture<Parentchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
