import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cumbia } from './cumbia';

describe('Cumbia', () => {
  let component: Cumbia;
  let fixture: ComponentFixture<Cumbia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cumbia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cumbia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
