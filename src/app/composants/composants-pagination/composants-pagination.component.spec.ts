import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsPaginationComponent } from './composants-pagination.component';

describe('ComposantsPaginationComponent', () => {
  let component: ComposantsPaginationComponent;
  let fixture: ComponentFixture<ComposantsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantsPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
