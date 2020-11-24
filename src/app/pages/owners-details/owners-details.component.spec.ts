import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersDetailsComponent } from './owners-details.component';

describe('OwnersDetailsComponent', () => {
  let component: OwnersDetailsComponent;
  let fixture: ComponentFixture<OwnersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
