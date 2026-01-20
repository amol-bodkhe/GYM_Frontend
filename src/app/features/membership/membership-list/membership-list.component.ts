import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Membership } from '../../../models/membership';
import { MembershipService } from '../../../core/services/membership.service';


@Component({
  selector: 'app-membership-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membership-list.component.html',
  styleUrl: './membership-list.component.css'
})
export class MembershipListComponent implements OnInit{

  memberships: Membership[] = [];
  backendMemberData: any []=[];
  // constructor(private membershipService: MembershipService){}
  constructor(private membershipService: MembershipService){
    console.log("test in memberships....");

  this.memberships=[{
  _id: "001",
  userId:"111",
  plan: "monthly",
  startDate: new Date('2026-01-17T00:00:00.000Z'), 
  endDate:  new Date('2026-01-31T23:59:59.999Z'),
  amount: 500
},
{
  _id: "002",
  userId:"112",
  plan: "yearly",
  startDate: new Date('2025-07-21T23:59:59.999Z'), 
  endDate: new Date('2026-07-20T23:59:59.999Z'),
  amount: 5000
}];
}

ngOnInit() {
    this.membershipService.getAll().subscribe({
      next: res => {this.backendMemberData = res,console.log("SERVICE CALL iin CALSS",res)},
      error: err => console.error("test error",err)
    });
       
  }
}
