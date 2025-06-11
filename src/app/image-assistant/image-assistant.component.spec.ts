import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAssistantComponent } from './image-assistant.component';

describe('ImageAssistantComponent', () => {
  let component: ImageAssistantComponent;
  let fixture: ComponentFixture<ImageAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
