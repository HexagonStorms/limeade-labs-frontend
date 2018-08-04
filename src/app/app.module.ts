import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ServicesComponent } from './services/services.component';
import { PartnerSliderComponent } from './partner-slider/partner-slider.component';
import { AwesomeElementsComponent } from './awesome-elements/awesome-elements.component';
import { PerksComponent } from './perks/perks.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FaqComponent } from './faq/faq.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    ServicesComponent,
    PartnerSliderComponent,
    AwesomeElementsComponent,
    PerksComponent,
    SkillsSectionComponent,
    VideoSectionComponent,
    TestimonialComponent,
    PricingComponent,
    PortfolioComponent,
    FaqComponent,
    OurTeamComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
