import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleAndTemplateComponent } from './inline-style-and-template.component';

describe('InlineStyleAndTemplateComponent', () => {
  let component: InlineStyleAndTemplateComponent;
  let fixture: ComponentFixture<InlineStyleAndTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineStyleAndTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineStyleAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
