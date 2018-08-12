import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  contact = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }


  constructor(public router: Router, public http: HttpClient) {
   
  }

  navigateTo(page) {
    this.router.navigate([page]);
  }

  sendEmail() {
    let validEmail = true;

    if (this.contact.name == "") {
      validEmail = false;
    }

    let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.contact.email == "" || validateEmail.test(String(this.contact.email).toLowerCase()) == false) {
      validEmail = false;
    }

    if (this.contact.name == "") {
      validEmail = false;
    }

    if (this.contact.phone == "") {
      validEmail = false;
    }

    if (this.contact.message == "") {
      validEmail = false;
    }
    
    console.log(this.contact);
    if (validEmail) {
      console.log('sending email');

      this.http.post('', this.contact)
      .subscribe( (response) => {
        console.log(response);
      });
    }
  }
}
