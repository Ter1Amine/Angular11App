import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsBoutonActionComponent } from './composants-bouton-action.component';

describe('ComposantsBoutonActionComponent', () => {
  let component: ComposantsBoutonActionComponent;
  let fixture: ComponentFixture<ComposantsBoutonActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantsBoutonActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsBoutonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
