import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaHome } from './spa-home';

describe('SpaHome', () => {
  let component: SpaHome;
  let fixture: ComponentFixture<SpaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
