import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyRightnavComponent } from './ay-rightnav.component';

describe('AyRightnavComponent', () => {
  let component: AyRightnavComponent;
  let fixture: ComponentFixture<AyRightnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyRightnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyRightnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
