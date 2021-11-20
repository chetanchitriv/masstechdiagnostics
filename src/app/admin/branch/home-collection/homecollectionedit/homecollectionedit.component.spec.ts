import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecollectioneditComponent } from './homecollectionedit.component';

describe('HomecollectioneditComponent', () => {
  let component: HomecollectioneditComponent;
  let fixture: ComponentFixture<HomecollectioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecollectioneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecollectioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
