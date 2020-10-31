import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule {}
