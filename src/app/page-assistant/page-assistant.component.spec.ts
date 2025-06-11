import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAssistantComponent } from './page-assistant.component';

describe('PageAssistantComponent', () => {
  let component: PageAssistantComponent;
  let fixture: ComponentFixture<PageAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
