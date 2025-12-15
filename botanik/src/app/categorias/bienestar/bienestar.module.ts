import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BienestarPage } from './bienestar.page';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [BienestarPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: BienestarPage }]),
    SharedModule,
  ]
})
export class BienestarPageModule {}