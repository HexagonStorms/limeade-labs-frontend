import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions = [
    {
      title: "Do you have Full Stack Developers on staff or only WordPress developers?",
      answer: "WordPress is a wonderful CMS (Content Management System) Framework that makes the creation of websites very easy for non-developers. If you have basic computer skills, and you only need a very simple website, you can use WordPress to build the site yourself. This means if an agency only has a WordPress Developer, you would be paying them to do work you could do <strong>yourself</strong>! If you need custom features for your site, you will most likely need the services of an agency with Full Stack Developers on staff. Limeade Labs have Full Stack Developers on staff with a wide variety of skillsets."
    },
    {
      title: "Can your agency make an App for us in the future?",
      answer: "Many businesses start off with a website and later on decide a mobile application would help them even more. We have been developing mobile and web application development for over 5 years with a wide range of products live on the market today."
    },
    {
      title: "Do you outsource any of your development work or design work?",
      answer: "Many times when work is outsourced, the developers use fast cookie-cutter solutions. All of our work is done in-house."
    },
    {
      title: "Will I own the website and all of the designs?",
      answer: "Some agencies try to keep the ownership of the designs or website so you have to keep coming back to them for additional fees. Anything we work on for you will 100% belong to your company."
    },
    {
      title: "What happens if the site breaks, is hacked, or malfunctions?",
      answer: "Make sure to check about the procedure for running into problems. Websites are 24/7 business methods. An unexpected problem could cost your company big time. Does the website designer mantain your website after launch, or is it up to you to secure an IT professional for future mishaps?"
    },
  ];

}
