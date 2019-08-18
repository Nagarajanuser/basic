import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentchild22Component } from './parentchild22.component';

describe('Parentchild22Component', () => {
  let component: Parentchild22Component;
  let fixture: ComponentFixture<Parentchild22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parentchild22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parentchild22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
