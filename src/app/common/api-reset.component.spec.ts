import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResetComponent } from './api-reset.component';

describe('ApiResetComponent', () => {
  let component: ApiResetComponent;
  let fixture: ComponentFixture<ApiResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
