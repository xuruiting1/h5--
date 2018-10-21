import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndsayComponent } from './andsay.component';

describe('AndsayComponent', () => {
  let component: AndsayComponent;
  let fixture: ComponentFixture<AndsayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndsayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndsayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
