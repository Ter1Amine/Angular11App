import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsHeaderComponent } from './composants-header.component';

describe('ComposantsHeaderComponent', () => {
  let component: ComposantsHeaderComponent;
  let fixture: ComponentFixture<ComposantsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
