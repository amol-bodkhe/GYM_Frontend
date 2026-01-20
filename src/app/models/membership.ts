export interface Membership {
  _id?: string;
  userId: string;
  plan: 'monthly' | 'yearly';
  startDate: Date;
  endDate: Date;
  amount: number;
}
