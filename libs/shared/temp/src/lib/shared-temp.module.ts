import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempComponent } from './temp/temp.component';
import { NbButtonModule} from '@nebular/theme';

@NgModule({
  imports: [CommonModule, NbButtonModule],
  declarations: [
    TempComponent
  ],
  exports: [
    TempComponent
  ]
})
export class SharedTempModule {}
