import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordsPageRoutingModule } from './records-routing.module';

import { RecordsPage } from './records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordsPageRoutingModule
  ],
  declarations: [RecordsPage]
})
export class RecordsPageModule {}
