import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyMaintainSubjectComponent } from './ay-maintain-subject.component';

describe('AyMaintainSubjectComponent', () => {
  let component: AyMaintainSubjectComponent;
  let fixture: ComponentFixture<AyMaintainSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyMaintainSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyMaintainSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
