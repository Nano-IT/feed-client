import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, RouterLink],
  exports: [TopBarComponent],
})
export class TopBarModule {}
