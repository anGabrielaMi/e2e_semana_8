import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPerfilPageRoutingModule } from './modificar-perfil-routing.module';

import { ModificarPerfilPage } from './modificar-perfil.page';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPerfilPageRoutingModule,
    SharedModule 
  ],
  declarations: [ModificarPerfilPage]
})
export class ModificarPerfilPageModule {}
