import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkineditComponent } from './walkinedit.component';

describe('WalkineditComponent', () => {
  let component: WalkineditComponent;
  let fixture: ComponentFixture<WalkineditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkineditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
