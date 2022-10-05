import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsMvtstockComponent } from './composants-mvtstock.component';

describe('ComposantsMvtstockComponent', () => {
  let component: ComposantsMvtstockComponent;
  let fixture: ComponentFixture<ComposantsMvtstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantsMvtstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsMvtstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
