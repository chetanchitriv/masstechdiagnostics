import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinlistComponent } from './walkinlist.component';

describe('WalkinlistComponent', () => {
  let component: WalkinlistComponent;
  let fixture: ComponentFixture<WalkinlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
