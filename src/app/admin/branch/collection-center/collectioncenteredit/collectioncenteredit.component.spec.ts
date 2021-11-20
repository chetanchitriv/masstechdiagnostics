import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectioncentereditComponent } from './collectioncenteredit.component';

describe('CollectioncentereditComponent', () => {
  let component: CollectioncentereditComponent;
  let fixture: ComponentFixture<CollectioncentereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectioncentereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectioncentereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
