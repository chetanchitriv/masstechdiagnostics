import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderoutsourceComponent } from './venderoutsource.component';

describe('VenderoutsourceComponent', () => {
  let component: VenderoutsourceComponent;
  let fixture: ComponentFixture<VenderoutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderoutsourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderoutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
