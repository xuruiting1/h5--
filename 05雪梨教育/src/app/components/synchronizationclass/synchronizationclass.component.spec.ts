import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizationclassComponent } from './synchronizationclass.component';

describe('SynchronizationclassComponent', () => {
  let component: SynchronizationclassComponent;
  let fixture: ComponentFixture<SynchronizationclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronizationclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronizationclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
