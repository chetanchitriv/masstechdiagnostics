import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecollectionrlistComponent } from './homecollectionrlist.component';

describe('HomecollectionrlistComponent', () => {
  let component: HomecollectionrlistComponent;
  let fixture: ComponentFixture<HomecollectionrlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecollectionrlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecollectionrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
