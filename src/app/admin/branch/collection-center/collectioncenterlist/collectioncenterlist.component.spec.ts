import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncenterlistComponent } from './collectioncenterlist.component';

describe('CollectioncenterlistComponent', () => {
  let component: CollectioncenterlistComponent;
  let fixture: ComponentFixture<CollectioncenterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectioncenterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectioncenterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
