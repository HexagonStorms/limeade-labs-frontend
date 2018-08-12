import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor() {
    $('#home-slider').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
      dots: false,
      items: 1,
      autoplay: true,
      autoHeight: true,
      responsiveCla1ss: true,
    });
  }

  ngOnInit() {
  }

  staff = [
    {
      name: "Josue Plaza",
      title: "Head of Development",
      image: "./assets/images/team/josue_500x667.gif",
      quote: "The way we spend our days is the way we spend our lives."
    },
    {
      name: "Joshua Garza",
      title: "Head of Design",
      image: "./assets/images/team/josh_500x667.gif",
      quote: "Live every day as if it were your first--with all the hope and wonderment of a new born ready to take the world."
    },
    {
      name: "Michael Famitafreshi",
      title: "Head of Finance",
      image: "./assets/images/team/michael2_500x667.gif",
      quote: "We are moving the RGV forward, one App at a time."
    },
    {
      name: "Victor Rodriguez",
      title: "Full Stack Developer",
      image: "./assets/images/team/victor2_500x667.gif",
      quote: "Teamwork makes the Dream Work."
    },
    {
      name: "Roxanne Garcia",
      title: "Full Stack Developer",
      image: "./assets/images/team/roxanne2_500x667.gif",
      quote: "The best preparation for tomorrow is doing your best today."
    }
  ];

}
