import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegalosPage } from './regalos.page';

describe('RegalosPage', () => {
  let component: RegalosPage;
  let fixture: ComponentFixture<RegalosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegalosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
