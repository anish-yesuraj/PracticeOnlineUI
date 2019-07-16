import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyBodyComponent } from './ay-body.component';

describe('AyBodyComponent', () => {
  let component: AyBodyComponent;
  let fixture: ComponentFixture<AyBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
