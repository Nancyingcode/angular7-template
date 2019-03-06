import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleModifyRecordComponent } from './rule.modify.record.component';

describe('Rule.Modify.RecordComponent', () => {
  let component: RuleModifyRecordComponent;
  let fixture: ComponentFixture<RuleModifyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleModifyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleModifyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
