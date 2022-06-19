import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandanaArt } from './mandana-art.component';

describe('MandanaArtComponent', () => {
  let component: MandanaArt;
  let fixture: ComponentFixture<MandanaArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandanaArt ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandanaArt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
