import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  staff = [
    {
      name: "Josue Plaza",
      title: "Lead Developer",
      image: "./assets/images/team/josue_500x667.gif",
      quote: "The way we spend our days is the way we spend our lives."
    },
    {
      name: "Joshua Garza",
      title: "Lead Designer",
      image: "./assets/images/team/josh_500x667.gif",
      quote: "I love women! Womenwomenwomenwomen."
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
      quote: "The best preparation for tomorrow is doing your best today."
    },
    {
      name: "Roxanne Garcia",
      title: "Full Stack Developer",
      image: "./assets/images/team/roxanne2_500x667.gif",
      quote: "I pick Mario in Super Smash. Enough said."
    }
  ];

}
