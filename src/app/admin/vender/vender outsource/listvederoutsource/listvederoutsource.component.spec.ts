import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvederoutsourceComponent } from './listvederoutsource.component';

describe('ListvederoutsourceComponent', () => {
  let component: ListvederoutsourceComponent;
  let fixture: ComponentFixture<ListvederoutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvederoutsourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvederoutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
