import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DateCustomPipe } from './pipes/date-custom.pipe';
import { BadgeCustomPipe } from './pipes/badge-custom.pipe';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { StringUtil } from './utils/string.util';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    BadgeCustomPipe,
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    BsButtonDirective,
    DateCustomPipe,
    BadgeCustomPipe,
    ValidationMessageComponent,
  ],
  providers: [StringUtil]
})
export class SharedModule { }
