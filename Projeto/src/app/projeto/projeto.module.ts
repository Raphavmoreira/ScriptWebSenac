import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { IconsComponent } from '../icons/icons.component';
import { ImageComponent } from '../image/image.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ActionComponent } from '../action/action.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    IconsComponent,
    ImageComponent,
    TestimonialsComponent,
    ActionComponent,
    FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    IconsComponent,
    ImageComponent,
    TestimonialsComponent,
    ActionComponent,
    FooterComponent

  ]
})
export class ProjetoModule { }
