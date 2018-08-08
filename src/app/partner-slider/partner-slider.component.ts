import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-slider',
  templateUrl: './partner-slider.component.html',
  styleUrls: ['./partner-slider.component.css']
})
export class PartnerSliderComponent implements OnInit {
  defaultPath = "./assets/images/logos/";
  partners = [
    {
      name: "Bravelets",
      image: "bravelets.png"
    },
    {
      name: "Clearhead",
      image: "clearhead-logo.png"
    },
    {
      name: "Texas Department of Transportation",
      image: "dps-logo-bw.png"
    },
    {
      name: "San Antonio Express News",
      image: "saen-logo.png"
    },
    {
      name: "El Buen",
      image: "el-buen-logo.png"
    },
    {
      name: "Integral Care",
      image: "integral-care-logo.png"
    },
    {
      name: "Mozido",
      image: "mozido-logo.png"
    },
    {
      name: "Parlevel Systems",
      image: "parlevel.png"
    },
    {
      name: "Talos",
      image: "talos-logo.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
