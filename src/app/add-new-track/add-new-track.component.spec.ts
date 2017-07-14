import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTrackComponent } from './add-new-track.component';

describe('AddNewTrackComponent', () => {
  let component: AddNewTrackComponent;
  let fixture: ComponentFixture<AddNewTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
