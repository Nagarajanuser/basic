import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExdirectivesComponent } from './exdirectives.component';

describe('ExdirectivesComponent', () => {
  let component: ExdirectivesComponent;
  let fixture: ComponentFixture<ExdirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExdirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
