import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodexlistComponent } from './codexlist.component';

describe('CodexlistComponent', () => {
  let component: CodexlistComponent;
  let fixture: ComponentFixture<CodexlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodexlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodexlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
