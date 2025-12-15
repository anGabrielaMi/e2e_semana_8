import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExteriorPageRoutingModule } from './exterior-routing.module';

import { ExteriorPage } from './exterior.page';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExteriorPageRoutingModule,
    SharedModule,
  ],
  declarations: [ExteriorPage]
})
export class ExteriorPageModule {}
