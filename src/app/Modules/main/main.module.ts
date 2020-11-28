import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Components/card/card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [CardComponent],
  bootstrap: []

})

export class MainModule {}
