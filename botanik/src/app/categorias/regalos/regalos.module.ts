import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegalosPageRoutingModule } from './regalos-routing.module';

import { RegalosPage } from './regalos.page';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegalosPageRoutingModule,
    SharedModule,
  ],
  declarations: [RegalosPage]
})
export class RegalosPageModule {}
