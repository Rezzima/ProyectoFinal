import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jukebox } from './jukebox';

describe('Jukebox', () => {
  let component: Jukebox;
  let fixture: ComponentFixture<Jukebox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jukebox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jukebox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
