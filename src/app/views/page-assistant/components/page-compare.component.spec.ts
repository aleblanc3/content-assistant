import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompareComponent } from './page-compare.component';

describe('PageCompareComponent', () => {
  let component: PageCompareComponent;
  let fixture: ComponentFixture<PageCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
