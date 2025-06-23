import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAltAssistant } from './image-alt-assistant';

describe('ImageAltAssistant', () => {
  let component: ImageAltAssistant;
  let fixture: ComponentFixture<ImageAltAssistant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAltAssistant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAltAssistant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
