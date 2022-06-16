import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsFilmPhotographyComponent } from './arts-film-photography.component';

describe('ArtsFilmPhotographyComponent', () => {
  let component: ArtsFilmPhotographyComponent;
  let fixture: ComponentFixture<ArtsFilmPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsFilmPhotographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsFilmPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
