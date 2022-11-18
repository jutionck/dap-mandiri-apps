import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAbComponent } from './child-ab.component';

describe('ChildAbComponent', () => {
  let component: ChildAbComponent;
  let fixture: ComponentFixture<ChildAbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
