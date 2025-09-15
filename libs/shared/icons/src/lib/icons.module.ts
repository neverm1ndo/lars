import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  imports: [],
})
export class LarsIconsModule {
  constructor(private registry: MatIconRegistry) {
    this.registry.addSvgIconSet('/public/icons/icons.svg');
  }
}
