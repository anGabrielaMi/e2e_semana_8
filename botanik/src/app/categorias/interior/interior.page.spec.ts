import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteriorPage } from './interior.page';

describe('InteriorPage', () => {
  let component: InteriorPage;
  let fixture: ComponentFixture<InteriorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
