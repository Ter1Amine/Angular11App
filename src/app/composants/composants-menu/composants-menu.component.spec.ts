import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsMenuComponent } from './composants-menu.component';

describe('ComposantsMenuComponent', () => {
  let component: ComposantsMenuComponent;
  let fixture: ComponentFixture<ComposantsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
