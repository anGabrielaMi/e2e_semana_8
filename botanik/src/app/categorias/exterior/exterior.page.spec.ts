import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExteriorPage } from './exterior.page';

describe('ExteriorPage', () => {
  let component: ExteriorPage;
  let fixture: ComponentFixture<ExteriorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
