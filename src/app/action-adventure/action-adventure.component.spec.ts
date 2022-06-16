import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionAdventureComponent } from './action-adventure.component';

describe('ActionAdventureComponent', () => {
  let component: ActionAdventureComponent;
  let fixture: ComponentFixture<ActionAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
