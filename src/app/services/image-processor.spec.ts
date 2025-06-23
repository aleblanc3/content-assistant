import { TestBed } from '@angular/core/testing';

import { ImageProcessor } from './image-processor';

describe('ImageProcessor', () => {
  let service: ImageProcessor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProcessor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
