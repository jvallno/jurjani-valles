import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog } from './blog.component';

describe('Blog', () => {
  let component: Blog;
  let fixture: ComponentFixture<Blog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
