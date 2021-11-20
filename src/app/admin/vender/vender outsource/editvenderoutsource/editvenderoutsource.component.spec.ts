import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvenderoutsourceComponent } from './editvenderoutsource.component';

describe('EditvenderoutsourceComponent', () => {
  let component: EditvenderoutsourceComponent;
  let fixture: ComponentFixture<EditvenderoutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvenderoutsourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvenderoutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
