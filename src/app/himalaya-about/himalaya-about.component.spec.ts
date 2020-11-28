import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimalayaAboutComponent } from './himalaya-about.component';

describe('HimalayaAboutComponent', () => {
  let component: HimalayaAboutComponent;
  let fixture: ComponentFixture<HimalayaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimalayaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HimalayaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
