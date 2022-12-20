import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q4C4Component } from './q4-c4.component';

describe('Q4C4Component', () => {
  let component: Q4C4Component;
  let fixture: ComponentFixture<Q4C4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q4C4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q4C4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
