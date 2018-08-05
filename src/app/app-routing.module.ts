import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "our-team", component: OurTeamComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "faq", component: FaqComponent },
  { path: "testimonial", component: TestimonialComponent },
  // DEFAULT PATH
  { path: "", redirectTo: "/", pathMatch: "full"}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
