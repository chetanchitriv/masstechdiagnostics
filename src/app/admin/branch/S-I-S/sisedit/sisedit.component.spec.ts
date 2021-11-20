import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiseditComponent } from './sisedit.component';

describe('SiseditComponent', () => {
  let component: SiseditComponent;
  let fixture: ComponentFixture<SiseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
