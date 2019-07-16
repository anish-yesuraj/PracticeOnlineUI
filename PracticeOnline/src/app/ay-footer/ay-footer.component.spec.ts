import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyFooterComponent } from './ay-footer.component';

describe('AyFooterComponent', () => {
  let component: AyFooterComponent;
  let fixture: ComponentFixture<AyFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
