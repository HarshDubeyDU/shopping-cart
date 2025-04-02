import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuantityChangeComponent } from './item-quantity-change.component';

describe('ItemQuantityChangeComponent', () => {
  let component: ItemQuantityChangeComponent;
  let fixture: ComponentFixture<ItemQuantityChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemQuantityChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemQuantityChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
