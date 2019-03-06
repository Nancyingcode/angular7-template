import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceUpdateComponent } from './announce-update.component';

describe('AnnounceUpdateComponent', () => {
  let component: AnnounceUpdateComponent;
  let fixture: ComponentFixture<AnnounceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
