import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonItemsComponent } from './common-items.component';

describe('CommonItemsComponent', () => {
  let component: CommonItemsComponent;
  let fixture: ComponentFixture<CommonItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
