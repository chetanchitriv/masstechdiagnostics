import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecollectionComponent } from './homecollection.component';

describe('HomecollectionComponent', () => {
  let component: HomecollectionComponent;
  let fixture: ComponentFixture<HomecollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
