import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablePage } from './table';

@NgModule({
  declarations: [
    TablePage,
    ComponentsModule,
  ],
  imports: [
    IonicPageModule.forChild(TablePage),
    ComponentsModule,
  ],
})
export class TablePageModule {
}
