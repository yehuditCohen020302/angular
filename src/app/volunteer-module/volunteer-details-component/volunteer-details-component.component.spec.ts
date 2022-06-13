import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetailsComponentComponent } from './volunteer-details-component.component';

describe('VolunteerDetailsComponentComponent', () => {
  let component: VolunteerDetailsComponentComponent;
  let fixture: ComponentFixture<VolunteerDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDetailsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
