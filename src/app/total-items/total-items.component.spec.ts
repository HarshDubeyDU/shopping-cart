import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalItemsComponent } from './total-items.component';

describe('TotalItemsComponent', () => {
  let component: TotalItemsComponent;
  let fixture: ComponentFixture<TotalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
