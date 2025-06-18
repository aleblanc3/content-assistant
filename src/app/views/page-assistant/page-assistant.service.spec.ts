import { TestBed } from '@angular/core/testing';

import { PageAssistantService } from '../../../../code-to-integrate/page-assistant.service';

describe('PageAssistantService', () => {
  let service: PageAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
