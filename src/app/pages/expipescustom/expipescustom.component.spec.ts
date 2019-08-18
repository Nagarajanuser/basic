import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpipescustomComponent } from './expipescustom.component';

describe('ExpipescustomComponent', () => {
  let component: ExpipescustomComponent;
  let fixture: ComponentFixture<ExpipescustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpipescustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpipescustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
