import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavbar } from './mobile-navbar.component';

describe('MobileNavbar', () => {
  let component: MobileNavbar;
  let fixture: ComponentFixture<MobileNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavbar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
