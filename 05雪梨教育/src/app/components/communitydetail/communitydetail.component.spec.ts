import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitydetailComponent } from './communitydetail.component';

describe('CommunitydetailComponent', () => {
  let component: CommunitydetailComponent;
  let fixture: ComponentFixture<CommunitydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
