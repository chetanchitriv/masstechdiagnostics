import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicuppointComponent } from './picuppoint.component';

describe('PicuppointComponent', () => {
  let component: PicuppointComponent;
  let fixture: ComponentFixture<PicuppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicuppointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicuppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
