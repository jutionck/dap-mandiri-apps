import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';
import { NextStepsComponent } from './next-steps/next-steps.component';
import { ResourceComponent } from './resource/resource.component';
import { ToolbasComponent } from './toolbas/toolbas.component';

const components = [
  ToolbasComponent,
  HighlightCardComponent,
  ResourceComponent,
  NextStepsComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class DashboardModule { }
