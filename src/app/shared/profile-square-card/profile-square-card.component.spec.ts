import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSquareCardComponent } from './profile-square-card.component';

describe('ProfileSquareCardComponent', () => {
  let component: ProfileSquareCardComponent;
  let fixture: ComponentFixture<ProfileSquareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSquareCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSquareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
