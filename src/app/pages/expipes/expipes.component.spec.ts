import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpipesComponent } from './expipes.component';

describe('ExpipesComponent', () => {
  let component: ExpipesComponent;
  let fixture: ComponentFixture<ExpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
