import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule ({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}