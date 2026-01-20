import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipAddComponent } from './membership-add.component';

describe('MembershipAddComponent', () => {
  let component: MembershipAddComponent;
  let fixture: ComponentFixture<MembershipAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembershipAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
