import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Membership } from '../../models/membership';
import {environment} from '../../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private baseUrl = environment.apiUrl;
  // private API = 'http://localhost:5000/api/membership';
//  private API = 'http://localhost:5000';
  constructor(private http: HttpClient) { 
    console.log("baseUrl check>>>", this.baseUrl)
  }

  getAll() {
    console.log("get Member API Called here..");
    return this.http.get<Membership[]>(`${this.baseUrl}/api/memberships`);
  }

  add(data: Membership) {
    return this.http.post(`${this.baseUrl}/api/memberships`, data);
  }

}
