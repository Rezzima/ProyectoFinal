import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHop } from './hip-hop';

describe('HipHop', () => {
  let component: HipHop;
  let fixture: ComponentFixture<HipHop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HipHop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipHop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
