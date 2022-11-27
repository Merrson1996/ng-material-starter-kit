import { NgModule } from '@angular/core';
import { AgePredictionComponent } from './age-prediction.component';
import {AsyncPipe, CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
