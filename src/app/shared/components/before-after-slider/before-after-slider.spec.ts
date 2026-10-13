import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeforeAfterSlider } from './before-after-slider';

describe('BeforeAfterSlider', () => {
  let component: BeforeAfterSlider;
  let fixture: ComponentFixture<BeforeAfterSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeAfterSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeAfterSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
