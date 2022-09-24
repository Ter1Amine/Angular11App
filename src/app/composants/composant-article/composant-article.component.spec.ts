import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantArticleComponent } from './composant-article.component';

describe('ComposantArticleComponent', () => {
  let component: ComposantArticleComponent;
  let fixture: ComponentFixture<ComposantArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
