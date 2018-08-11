import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  works = [
    {
      name: "Feed by Parlevel",
      description: "Feed sends everything you need to know about your vending, micro market, or OCS operation directly to your mobile phone. ",
      url: "http://www.parlevelsystems.com/2018/01/10/stay-connected-feed-vending-micro-market-ocs-app/",
      image: "./assets/images/portfolio/feed-by-parlevel.jpg"
    },
    {
      name: "Café Ubicuo",
      description: "Branding & Design",
      url: "",
      image: "./assets/images/portfolio/ubicuo-3.png"
    },
    {
      name: "Bravelets",
      description: "Bravelets™ is a fundraising platform for non-profit companies. 10% of all jewellry purchases goes directly to charities.",
      url: "https://www.bravelets.com/",
      image: "./assets/images/portfolio/bravelets_c.png"
    },
    {
      name: "Link by Parlevel",
      description: "A direct link between customers and a vending operation. Enable your account to order vending, micro market, and coffee supplies.",
      url: "http://www.parlevelsystems.com/parlevel-link/",
      image: "./assets/images/portfolio/parlevel-link-3.jpg"
    },
    {
      name: "Monarch Medical Diagnostics",
      description: "Branding & Design",
      url: "",
      image: "./assets/images/portfolio/brochure2-4.png"
    },
    {
      name: "Strength Park",
      description: "Branding, Web, & Design",
      url: "",
      image: "./assets/images/portfolio/strengthpark1-4.png"
    },
    {
      name: "Driver Texas",
      description: "Mobile App Design",
      url: "",
      image: "./assets/images/portfolio/dps3-4.png"
    },
    {
      name: "Parlevel Store",
      description: "The Parlevel Store is an eCommerce platform for vending operators and managers to purchase equipment for their vending operation.",
      url: "https://parlevelstore.com",
      image: "./assets/images/portfolio/parlevel-store.jpg"
    },
  ];

}
