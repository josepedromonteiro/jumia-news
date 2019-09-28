import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSearchPreviewComponent } from './new-search-preview.component';

describe('NewSearchPreviewComponent', () => {
  let component: NewSearchPreviewComponent;
  let fixture: ComponentFixture<NewSearchPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSearchPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSearchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
