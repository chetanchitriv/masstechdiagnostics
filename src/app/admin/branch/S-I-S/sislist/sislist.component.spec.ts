import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SislistComponent } from './sislist.component';

describe('SislistComponent', () => {
  let component: SislistComponent;
  let fixture: ComponentFixture<SislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SislistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
