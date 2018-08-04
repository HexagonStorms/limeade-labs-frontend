import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public router: Router) {
   
  }

  navigateTo(page) {
    this.router.navigate([page]);
  }
}
