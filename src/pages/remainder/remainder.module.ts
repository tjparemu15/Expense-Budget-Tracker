import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemainderPage } from './remainder';

@NgModule({
  declarations: [
    RemainderPage,
  ],
  imports: [
    IonicPageModule.forChild(RemainderPage),
  ],
})
export class RemainderPageModule {}
