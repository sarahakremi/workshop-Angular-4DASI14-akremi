import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compoments } from './compoments';

describe('Compoments', () => {
  let component: Compoments;
  let fixture: ComponentFixture<Compoments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compoments],
    }).compileComponents();

    fixture = TestBed.createComponent(Compoments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
