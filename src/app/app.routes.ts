import { Routes } from '@angular/router';
import { MembershipAddComponent } from './features/membership/membership-add/membership-add.component';
import { MembershipListComponent } from './features/membership/membership-list/membership-list.component';

export const routes: Routes = [
  { path: '', redirectTo:'memberships',pathMatch: 'full' },
  { path: 'memberships', component: MembershipListComponent },
  { path: 'add-membership', component: MembershipAddComponent }
];
