import { Component,OnInit } from '@angular/core';
import { MembershipService } from '../../../core/services/membership.service';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-membership-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './membership-add.component.html',
  styleUrl: './membership-add.component.css'
})
export class MembershipAddComponent {

  form = this.fb.group({
    userId: [''],
    plan: ['monthly'],
    amount: [0]
  });

  constructor(
    private fb: FormBuilder,
    private membershipService: MembershipService
  ) {}

  submit() {
    this.membershipService.add(this.form.value as any)
      .subscribe(() => alert('Membership Added'));
  }

}
