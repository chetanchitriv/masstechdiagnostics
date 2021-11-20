import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupeditComponent } from './pickupedit.component';

describe('PickupeditComponent', () => {
  let component: PickupeditComponent;
  let fixture: ComponentFixture<PickupeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
