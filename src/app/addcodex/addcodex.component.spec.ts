import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodexComponent } from './addcodex.component';

describe('AddcodexComponent', () => {
  let component: AddcodexComponent;
  let fixture: ComponentFixture<AddcodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
