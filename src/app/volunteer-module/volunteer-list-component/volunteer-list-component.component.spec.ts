import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerListComponentComponent } from './volunteer-list-component.component';

describe('VolunteerListComponentComponent', () => {
  let component: VolunteerListComponentComponent;
  let fixture: ComponentFixture<VolunteerListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
