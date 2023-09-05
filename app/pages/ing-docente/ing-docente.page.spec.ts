import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngDocentePage } from './ing-docente.page';

describe('IngDocentePage', () => {
  let component: IngDocentePage;
  let fixture: ComponentFixture<IngDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
