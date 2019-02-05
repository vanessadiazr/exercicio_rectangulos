import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleContainerComponent } from './rectangle-container.component';

describe('RectangleContainerComponent', () => {
  let component: RectangleContainerComponent;
  let fixture: ComponentFixture<RectangleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
