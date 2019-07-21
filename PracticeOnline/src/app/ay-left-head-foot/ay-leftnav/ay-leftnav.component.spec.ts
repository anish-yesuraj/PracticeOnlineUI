import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyLeftnavComponent } from './ay-leftnav.component';

describe('AyLeftnavComponent', () => {
  let component: AyLeftnavComponent;
  let fixture: ComponentFixture<AyLeftnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyLeftnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyLeftnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
