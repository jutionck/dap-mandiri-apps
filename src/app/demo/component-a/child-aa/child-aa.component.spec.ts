import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAaComponent } from './child-aa.component';

describe('ChildAaComponent', () => {
  let component: ChildAaComponent;
  let fixture: ComponentFixture<ChildAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
