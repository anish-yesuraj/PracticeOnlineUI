import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyLayoutComponent } from './ay-layout.component';

describe('AyLayoutComponent', () => {
  let component: AyLayoutComponent;
  let fixture: ComponentFixture<AyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
