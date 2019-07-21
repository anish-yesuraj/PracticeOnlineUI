import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyHomeComponent } from './ay-home.component';

describe('AyHomeComponent', () => {
  let component: AyHomeComponent;
  let fixture: ComponentFixture<AyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
