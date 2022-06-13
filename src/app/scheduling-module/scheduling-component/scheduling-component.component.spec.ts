import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingComponentComponent } from './scheduling-component.component';

describe('SchedulingComponentComponent', () => {
  let component: SchedulingComponentComponent;
  let fixture: ComponentFixture<SchedulingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
